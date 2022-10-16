import { BigNumber, providers, Wallet } from "ethers";
import { arbLog, requireEnvVariables } from "arb-shared-dependencies";
import {
  L1TransactionReceipt,
  L2TransactionReceipt,
  L1ToL2MessageWriter,
  L1ToL2MessageStatus,
  EthBridger,
  getL2Network,
} from "@arbitrum/sdk";
import { ethers } from "hardhat";
import { hexDataLength } from "@ethersproject/bytes";
import { L1ToL2MessageGasEstimator } from "@arbitrum/sdk/dist/lib/message/L1ToL2MessageGasEstimator";

const walletPrivateKey = process.env.DEVNET_PRIVKEY || "";

const l1Provider = new providers.JsonRpcProvider(process.env.L1RPC);
const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC);

const l1Wallet = new Wallet(walletPrivateKey, l1Provider);
const l2Wallet = new Wallet(walletPrivateKey, l2Provider);

const main = async () => {
  await arbLog("Cross-chain NFT Market");

  const l2Network = await getL2Network(l2Provider);
  const ethBridger = new EthBridger(l2Network);
  const inboxAddress = ethBridger.l2Network.ethBridge.inbox;

  const ArbXNFTL1 = await (
    await ethers.getContractFactory("ArbXNFTL1")
  ).connect(l1Wallet);
  console.log("Deploying ArbXNFTL1 👋");
  const arbXNFTL1 = await ArbXNFTL1.deploy(
    ethers.constants.AddressZero, // temp l2 addr
    inboxAddress
  );
  await arbXNFTL1.deployed();
  console.log(`deployed to ${arbXNFTL1.address}`);
  console.log(`with arguments ${(ethers.constants.AddressZero, inboxAddress)}`);

  const ArbXNFTL2 = await (
    await ethers.getContractFactory("ArbXNFTL2")
  ).connect(l2Wallet);
  console.log("Deploying ArbXNFTL2 👋👋");
  const arbXNFTL2 = await ArbXNFTL2.deploy(
    ethers.constants.AddressZero // temp l1 addr
  );
  await arbXNFTL2.deployed();
  console.log(`deployed to ${arbXNFTL2.address}`);

  const TestNFTL1 = await (
    await ethers.getContractFactory("TestNFT")
    ).connect(l1Wallet);
    console.log("Deploying TestNFT 👋👋");
  const testNFTL1 = await TestNFTL1.deploy();
  await testNFTL1.deployed();
  console.log(`deployed to ${testNFTL1.address}`);

  console.log(`Updating L2 Target Address`);
  const updateL1Tx = await arbXNFTL1.updateL2Target(arbXNFTL2.address);
  await updateL1Tx.wait();

  console.log(`Updating L1 Target Address`);
  const updateL2Tx = await arbXNFTL2.updateL1Target(arbXNFTL1.address);
  await updateL2Tx.wait();
  console.log("Counterpart contract addresses set in both greeters 👍");

  const price = "1000000000000000"; //0.001 ETH
  const tokenId = "0";

  console.log("Approving TestNFT");
  const approvedTx = await testNFTL1.approve(arbXNFTL1.address, tokenId);
  await approvedTx.wait();
  console.log("Successfully approved");

  const newListingBytes = ethers.utils.defaultAbiCoder.encode(
    ["address", "uint256", "uint256"],
    [testNFTL1.address, tokenId, price]
  );

  const newListingBytesLength = hexDataLength(newListingBytes) + 4; // 4 bytes func identifier

  const l1ToL2MessageGasEstimate = new L1ToL2MessageGasEstimator(l2Provider);

  const _submissionPriceWei =
    await l1ToL2MessageGasEstimate.estimateSubmissionFee(
      l1Provider,
      await l1Provider.getGasPrice(),
      newListingBytesLength
    );

  console.log(
    `Current retryable base submission price: ${_submissionPriceWei.toString()}`
  );

  const submissionPriceWei = _submissionPriceWei.mul(5);

  const gasPriceBid = await l2Provider.getGasPrice();
  console.log(`L2 gas price: ${gasPriceBid.toString()}`);

  const ABI = [
    "function updateNFTPrice(address nftContractAddress, uint256 tokenId, uint256 price)",
  ];
  const iface = new ethers.utils.Interface(ABI);
  const calldata = iface.encodeFunctionData("updateNFTPrice", [
    testNFTL1.address,
    tokenId,
    price,
  ]);

  const maxGas = await l1ToL2MessageGasEstimate.estimateRetryableTicketGasLimit(
    {
      from: arbXNFTL1.address,
      to: arbXNFTL2.address,
      l2CallValue: BigNumber.from("0"),
      excessFeeRefundAddress: l2Wallet.address,
      callValueRefundAddress: l2Wallet.address,
      data: calldata,
    },
    ethers.utils.parseEther("1")
  );

  const callValue = submissionPriceWei.add(gasPriceBid.mul(maxGas));

  console.log(
    `Sending Listing to L2 with ${callValue.toString()} callValue for L2 fees:`
  );

  const setListingTx = await arbXNFTL1.list(
    testNFTL1.address,
    tokenId,
    price,
    submissionPriceWei,
    maxGas,
    gasPriceBid,
    {
      value: callValue,
    }
  );
  const setListingRec = await setListingTx.wait();

  console.log(
    `Listing txn confirmed on L1! 🙌 ${setListingRec.transactionHash}`
  );

  const l1TxReceipt = new L1TransactionReceipt(setListingRec);

  const message = await l1TxReceipt.getL1ToL2Messages(
    l2Wallet
  );
  const status = await message[0].waitForStatus();
  console.log(status);
  if (Number(status) === L1ToL2MessageStatus.REDEEMED) {
    console.log(`L2 retryable txn executed 🥳`);
  } else {
    console.log(
      `L2 retryable txn failed with status `
    );
  }

  const listedPrice = await arbXNFTL2.getNFTPrice(testNFTL1.address, tokenId);
  console.log(`Listed Price: "${listedPrice}"`);
  console.log("✌️");

  // const setBuyingTx = await arbXNFTL2.buy(testNFTL1.address, tokenId, { value: listedPrice });
  // const setBuyingRec = await setBuyingTx.wait();
  // console.log(`Buying txn confirmed on L2! 🙌 ${setBuyingRec.transactionHash}`);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
