// SPDX-License-Identifier: MIT
pragma solidity >=0.6.11;

import "arbos-precompiles/arbos/builtin/ArbSys.sol";
import "@arbitrum/nitro-contracts/src/libraries/AddressAliasHelper.sol";

interface IERC721{
  function transferFrom(address from, address to, uint256 tokenId) external;
}

contract ArbXNFTL2 {
  address public l1Target;
  ArbSys constant arbsys = ArbSys(address(100));

  event L2ToL1TxCreated(uint256 indexed withdrawalId);

  // hash(nftContractAddress, tokenId) => price
  mapping(bytes32 => uint256) public listedPrice;

  constructor(address _l1Target) {
    l1Target = _l1Target;
  }

  modifier onlyL1Target() {
    require(
            msg.sender == AddressAliasHelper.applyL1ToL2Alias(l1Target),
            "Greeting only updateable by L1"
        );
    _;
  }

  function updateL1Target(address _l1Target) public {
        l1Target = _l1Target;
    }

  function updateNFTPrice(address nftContractAddress, uint256 tokenId, uint256 price)public onlyL1Target{
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    listedPrice[key] = price;
  }

  function getNFTPrice(address nftContractAddress, uint256 tokenId) public view returns(uint256) {
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    return listedPrice[key];
  }

  function buy(address nftContractAddress, uint256 tokenId) public payable returns(uint256) {
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    require(listedPrice[key] != 0);
    require(listedPrice[key] <= msg.value);
    bytes4 selector = bytes4(keccak256("transferNFT(address,uint256,address)"));
    bytes memory data = abi.encodeWithSelector(selector, nftContractAddress, tokenId, msg.sender);
    uint256 withdrawalId = arbsys.sendTxToL1(l1Target, data);
    listedPrice[key] = 0;

    emit L2ToL1TxCreated(withdrawalId);
    return withdrawalId;
  }

  function transferNFT(address nftContractAddress, uint256 tokenId, address to) public onlyL1Target {
    IERC721(nftContractAddress).transferFrom(address(this), to, tokenId);
  }

  function list(address nftContractAddress, uint256 tokenId, uint256 price) public payable returns(uint256) {
    IERC721(nftContractAddress).transferFrom(msg.sender, address(this), tokenId);
    bytes4 selector = bytes4(keccak256("updateNFTPrice(address,uint256,uint256)"));
    bytes memory data = abi.encodeWithSelector(selector, nftContractAddress, tokenId, price);
    uint256 withdrawalId = arbsys.sendTxToL1(l1Target, data);
    emit L2ToL1TxCreated(withdrawalId);
    return withdrawalId;
  }
}