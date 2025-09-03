// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IReaLEstate1155 {
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    function balanceOf(
        address account,
        uint256 id
    ) external view returns (uint256);
}

contract MarketPlace {
    IReaLEstate1155 public tokenContract;

    struct Listing {
        uint256 tokenId;
        uint256 pricePerUnit;
        uint256 amountAvailable;
        address seller;
    }

    mapping(uint256 => Listing[]) public listings;

    event Listed(
        uint256 indexed tokenId,
        uint256 pricePerUnit,
        uint256 amount,
        address indexed seller
    );
    event Purchased(
        uint256 indexed tokenId,
        uint256 amount,
        address indexed buyer
    );
    event Removed(uint256 indexed tokenId, address indexed seller);

    constructor(address _tokenContractAddress) {
        tokenContract = IReaLEstate1155(_tokenContractAddress);
    }

    function listTokensForSale(
        uint256 tokenId,
        uint256 pricePerUnit,
        uint256 amount
    ) public {
        require(pricePerUnit > 0, "Price must be greater than zero");
        require(amount > 0, "Amount must be greater than zero");
        require(
            tokenContract.balanceOf(msg.sender, tokenId) >= amount,
            "Insufficient token balance"
        );

        listings[tokenId].push(
            Listing({
                tokenId: tokenId,
                pricePerUnit: pricePerUnit,
                amountAvailable: amount,
                seller: msg.sender
            })
        );

        emit Listed(tokenId, pricePerUnit, amount, msg.sender);
    }

    function buyToken(uint256 tokenId, uint256 amount) public payable {
        Listing[] storage tokenListings = listings[tokenId];

        for (uint256 i = 0; i < tokenListings.length; i++) {
            Listing storage listing = tokenListings[i];

            if (
                listing.amountAvailable >= amount &&
                msg.value >= listing.pricePerUnit * amount
            ) {
                listing.amountAvailable -= amount;

                tokenContract.safeTransferFrom(
                    listing.seller,
                    msg.sender,
                    tokenId,
                    amount,
                    ""
                );

                payable(listing.seller).transfer(listing.pricePerUnit * amount);

                emit Purchased(tokenId, amount, msg.sender);
                return;
            }
        }

        revert("No suitable listing found");
    }

    function resellToken(
        uint256 tokenId,
        uint256 pricePerUnit,
        uint256 amount
    ) public {
        listTokensForSale(tokenId, pricePerUnit, amount);
    }

    function removeListing(uint256 tokenId) public {
        Listing[] storage tokenListings = listings[tokenId];
        for (uint256 i = 0; i < tokenListings.length; i++) {
            if (tokenListings[i].seller == msg.sender) {
                delete tokenListings[i];
                emit Removed(tokenId, msg.sender);
                break;
            }
        }
    }

    // Optional: get listings by tokenId
    function getListings(
        uint256 tokenId
    ) public view returns (Listing[] memory) {
        return listings[tokenId];
    }
}
