// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReaLEstate1155 is ERC1155, Ownable {
    mapping(uint256 => string) private _tokenURIs;

    // IPFS base URI with placeholder
    constructor() ERC1155("ipfs://QmPlaceholder/{id}.json") Ownable(msg.sender) {}


    function mint(address to, uint256 tokenId, uint256 amount, bytes memory data) public onlyOwner {
        require(to != address(0), "Invalid address");
        require(amount > 0, "Amount must be greater than zero");
        require(tokenId > 0, "Token ID must be greater than zero");

        _mint(to, tokenId, amount, data);
    }

    function burn(address from, uint256 tokenId, uint256 amount) public onlyOwner {
        _burn(from, tokenId, amount);
    }

   function setURI(uint256 tokenId, string memory tokenUri) public onlyOwner {
    _tokenURIs[tokenId] = tokenUri;
    emit URI(tokenUri, tokenId);
    }


    function uri(uint256 tokenId) public view override returns (string memory) {
        string memory tokenURI = _tokenURIs[tokenId];
        return bytes(tokenURI).length > 0 ? tokenURI : super.uri(tokenId);
    }
}