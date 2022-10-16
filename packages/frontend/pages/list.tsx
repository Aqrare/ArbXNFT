import { Box, Button, Flex, Heading, Input, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { useAccount, useNetwork, useSigner } from 'wagmi'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { BigNumber, providers, Wallet } from 'ethers'
import { hexDataLength } from '@ethersproject/bytes'
import { L1ToL2MessageGasEstimator } from '@arbitrum/sdk/dist/lib/message/L1ToL2MessageGasEstimator'
import { ArbXNFTL1ABI } from '../lib/ArbXNFTL1'
import { ArbXNFTL2ABI } from '../lib/ArbXNFTL2'
import { goerliContractAddress } from '../lib/address'
import { goerliArbitrumContract } from '../lib/address'
import { ERC721ABI } from '../lib/ERC721ABI'

const List: NextPage = () => {
  const { data: signer } = useSigner()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const [nftContractAddress, setNFTContractAddress] = useState('')
  const [tokenId, setTokenId] = useState('')
  const [price, setPrice] = useState('')
  const l1Provider = new providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/3aeb14276844467fa4d80f03d505a7ab'
  )
  const l2Provider = new providers.JsonRpcProvider(
    'https://goerli-rollup.arbitrum.io/rpc'
  )

  const handleChangeNFTContractAddress = (e: any) => {
    const inputValue = e.target.value
    setNFTContractAddress(inputValue)
  }
  const handleChangeTokenId = (e: any) => {
    const inputValue = e.target.value
    setTokenId(inputValue)
  }
  const handleChangePrice = (e: any) => {
    const inputValue = e.target.value
    setPrice(inputValue)
  }

  const approveNFT = async (approvalContractAddress: string) => {
    if (!signer || !address) return
    const contract = new ethers.Contract(nftContractAddress, ERC721ABI, signer)
    const approveTx = await contract.approve(approvalContractAddress, tokenId);
    const approveRec = await approveTx.wait()
   console.log(`Approving confirmed on L1! 🙌 ${approveRec.transactionHash}`)
  }

  const listNFTToL2 = async () => {
    if (!signer || !address) return
    const nftContract = new ethers.Contract(
      nftContractAddress,
      ERC721ABI,
      signer
    )
    const spender = await nftContract.getApproved(tokenId);
    if (spender != goerliContractAddress) {
      await approveNFT(goerliContractAddress)
    }
    const contract = new ethers.Contract(
      goerliContractAddress,
      ArbXNFTL1ABI,
      signer
    )
    const newListingBytes = ethers.utils.defaultAbiCoder.encode(
      ['address', 'uint256', 'uint256'],
      [nftContractAddress, tokenId, price]
    )
    const newListingBytesLength = hexDataLength(newListingBytes) + 4 // 4 bytes func identifier
    const l1ToL2MessageGasEstimate = new L1ToL2MessageGasEstimator(l2Provider)

    const _submissionPriceWei =
      await l1ToL2MessageGasEstimate.estimateSubmissionFee(
        l1Provider,
        await l1Provider.getGasPrice(),
        newListingBytesLength
      )

    const submissionPriceWei = _submissionPriceWei.mul(5)

    const gasPriceBid = await l2Provider.getGasPrice()
    console.log(`L2 gas price: ${gasPriceBid.toString()}`)
    const ABI = [
      'function updateNFTPrice(address nftContractAddress, uint256 tokenId, uint256 price)',
    ]
    const iface = new ethers.utils.Interface(ABI)
    const calldata = iface.encodeFunctionData('updateNFTPrice', [
      nftContractAddress,
      tokenId,
      price,
    ])
    
    const maxGas =
      await l1ToL2MessageGasEstimate.estimateRetryableTicketGasLimit(
        {
          from: goerliContractAddress,
          to: goerliArbitrumContract,
          l2CallValue: BigNumber.from('0'),
          excessFeeRefundAddress: address,
          callValueRefundAddress: address,
          data: calldata,
        },
        ethers.utils.parseEther('1')
      )

    const callValue = submissionPriceWei.add(gasPriceBid.mul(maxGas))
    const setListingTx = await contract.list(
      nftContractAddress,
      tokenId,
      price,
      submissionPriceWei,
      maxGas,
      gasPriceBid,
      {
        value: callValue,
      }
    )
    const setListingRec = await setListingTx.wait()

    console.log(
      `Listing txn confirmed on L1! 🙌 ${setListingRec.transactionHash}`
    )
  }

  const listNFTToL1 = async () => {
    if (!signer || !address) return
    const contract = new ethers.Contract(
      goerliArbitrumContract,
      ArbXNFTL2ABI,
      signer
    )
    const setListingTx = await contract.list(nftContractAddress, tokenId, price)
    const setListingRec = await setListingTx.wait()
    console.log(
      `Listing txn confirmed on L1! 🙌 ${setListingRec.transactionHash}`
    )
  }

  return (
    <Layout>
      <Flex justifyContent="center" mb="2">
        <Box mt="10" w="50%" justifyContent={'center'} textAlign={'center'}>
          <Heading as="h1" mb="8">
            List NFT
          </Heading>
          <Input
            placeholder="NFT Contract Address"
            onChange={handleChangeNFTContractAddress}
          ></Input>
          <Input
            mt="4"
            placeholder="Token ID"
            onChange={handleChangeTokenId}
          ></Input>
          <Input
            mt="4"
            placeholder="Price"
            onChange={handleChangePrice}
          ></Input>
          {chain?.id == 5 ? (
            <Button mt="4" colorScheme="teal" onClick={listNFTToL2}>
              List To Arbitrum
            </Button>
          ) : (
            <Button mt="4" colorScheme="teal" onClick={listNFTToL1}>
              List To Ethereum
            </Button>
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default List
