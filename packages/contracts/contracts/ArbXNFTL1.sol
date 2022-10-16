// SPDX-License-Identifier: MIT
pragma solidity >=0.6.11;

import "arb-bridge-eth/contracts/bridge/Inbox.sol";
import "arb-bridge-eth/contracts/bridge/Outbox.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";


contract ArbXNFTL1 {
  address public l2Target;
  IInbox public inbox;

  event RetryableTicketCreated(uint256 indexed ticketId);

  // hash(nftContractAddress, tokenId) => price
  mapping(bytes32 => uint256) public listedPrice;

  constructor(
    address _l2Target,
    address _inbox
  ) public{
    l2Target = _l2Target;
    inbox = IInbox(_inbox);
  }

  modifier onlyL2Target() {
    IBridge bridge = inbox.bridge();
    // this prevents reentrancies on L2 to L1 txs
    require(msg.sender == address(bridge), "NOT_BRIDGE");
    IOutbox outbox = IOutbox(bridge.activeOutbox());
    address l2Sender = outbox.l2ToL1Sender();
    require(l2Sender == l2Target, "Greeting only updateable by L2");
    _;
  }

  function updateL2Target(address _l2Target) public {
        l2Target = _l2Target;
  }

  function list(address nftContractAddress, uint256 tokenId, uint256 price, uint256 maxSubmissionCost,uint256 maxGas,uint256 gasPriceBid) public payable returns(uint256) {
    IERC721(nftContractAddress).transferFrom(msg.sender, address(this), tokenId);
    bytes4 selector = bytes4(keccak256("updateNFTPrice(address,uint256,uint256)"));
    bytes memory data = abi.encodeWithSelector(selector, nftContractAddress, tokenId, price);
    uint256 ticketID = _sendMsgToL2(data, maxSubmissionCost, maxGas, gasPriceBid);

    return ticketID;
  }

  function _sendMsgToL2(bytes memory data, uint256 maxSubmissionCost,uint256 maxGas,uint256 gasPriceBid) internal returns(uint256){
    uint256 ticketID = inbox.createRetryableTicket{ value: msg.value }(
            l2Target,
            0,
            maxSubmissionCost,
            msg.sender,
            msg.sender,
            maxGas,
            gasPriceBid,
            data
        );
    emit RetryableTicketCreated(ticketID);
  }

  function updateNFTPrice(address nftContractAddress, uint256 tokenId, uint256 price)public onlyL2Target{
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    listedPrice[key] = price;
  }

  function mockUpdateNFTPrice(address nftContractAddress, uint256 tokenId, uint256 price)public {
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    listedPrice[key] = price;
  }

  function transferNFT(address nftContractAddress, uint256 tokenId, address to) public onlyL2Target {
    IERC721(nftContractAddress).transferFrom(address(this), to, tokenId);
  }

  function buy(address nftContractAddress, uint256 tokenId, uint256 maxSubmissionCost,uint256 maxGas,uint256 gasPriceBid) public payable returns(uint256) {
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    require(listedPrice[key] != 0);
    require(listedPrice[key] <= msg.value);
    bytes4 selector = bytes4(keccak256("transferNFT(address,uint256,address)"));
    bytes memory data = abi.encodeWithSelector(selector, nftContractAddress, tokenId, msg.sender);
    uint256 ticketID = _sendMsgToL2(data, maxSubmissionCost, maxGas, gasPriceBid);
    listedPrice[key] = 0;

    return ticketID;
  }

  function getNFTPrice(address nftContractAddress, uint256 tokenId) public view returns(uint256) {
    bytes32 key = keccak256(abi.encodePacked(nftContractAddress, tokenId));
    return listedPrice[key];
  }

}