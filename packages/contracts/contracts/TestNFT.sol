// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestNFT is ERC721 {
  uint256 public supplied;

  constructor() public ERC721("TestNFT", "TESTNFT") {
    _safeMint(msg.sender, supplied);
    ++supplied;
  }

  function mint() public {
    _safeMint(msg.sender, supplied);
    ++supplied;
  }
}