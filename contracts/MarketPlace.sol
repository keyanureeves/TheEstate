// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IReaLEstate1155 {
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
}

contract MarketPlace {
    IReaLEstate1155 public tokenContract;

    struct Listing {
        uint256 tokenId;
        uint256 pricePerUnit;
        uint256 amountAvailable;
        address seller;
    }

    mapping(uint256 => Listing) public listings;

    event Listed(uint256 indexed tokenId, uint256 pricePerUnit, uint256 amount, address indexed seller);
    event Purchased(uint256 indexed tokenId, uint256 amount, address indexed buyer);

    constructor(address _tokenContractAddress) {
        tokenContract = IReaLEstate1155(_tokenContractAddress);
    }

    function listTokensForSale(uint256 tokenId, uint256 pricePerUnit, uint256 amount) public {
        require(pricePerUnit > 0, "Price must be greater than zero");
        require(amount > 0, "Amount must be greater than zero");

        listings[tokenId] = Listing({
            tokenId: tokenId,
            pricePerUnit: pricePerUnit,
            amountAvailable: amount,
            seller: msg.sender
        });

        emit Listed(tokenId, pricePerUnit, amount, msg.sender);
    }

    function buyToken(uint256 tokenId, uint256 amount) public payable {
        Listing storage listing = listings[tokenId];
        require(listing.amountAvailable >= amount, "Not enough tokens listed");
        uint256 totalPrice = listing.pricePerUnit * amount;
        require(msg.value >= totalPrice, "Insufficient Ether sent");

        listing.amountAvailable -= amount;
        tokenContract.safeTransferFrom(listing.seller, msg.sender, tokenId, amount, "");

        payable(listing.seller).transfer(totalPrice);

        emit Purchased(tokenId, amount, msg.sender);
    }

    //function for reselling token

    
}