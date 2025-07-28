# Sample Real World Asset Tokenisation Project

## Real World Asset Tokenization & Marketplace

This project builds a decentralized platform for tokenizing and trading real estate assets on the Ethereum Sepolia testnet using ERC-1155 smart contracts and IPFS-hosted metadata.
Users can:
- Mint fractional property ownership tokens
- List tokens for sale
- Buy tokens and transfer ownership
- View metadata like images, location, valuation, and legal documents

## Smart contracts

ReaLEstate1155.sol
- ERC-1155 contract that represents property tokens.
- Tokens are fractional and fungible.
- Each token ID links to metadata hosted on IPFS.
- Only the contract owner can mint or burn tokens.
- setURI(tokenId, ipfsURI) assigns detailed info like valuation, documents, and expected returns.

MarketPlace.sol
- Allows token holders to list their tokens for sale.
- Buyers can purchase tokens by sending ETH.
- Ownership and balances update on-chain via safeTransferFrom.

## Front-End Stack
###  (still under construction)

Built with:
- Next.js for structure
- Tailwind CSS for styling
- Ethers.js to interact with contracts
- Pinata/IPFS for decentralized storage
Core components:
- Minting form
- Listing interface
- Token explorer linked to metadata


### Remix Testing
Smart contracts were successfully deployed and tested in Remix IDE. This allowed simulation of:
- Property token minting
- Linking IPFS metadata via CID
- Listing and purchasing assets
- Tracking transfer of ownership

### Deployment Summary
- Contracts compiled and deployed to Sepolia via Alchemy
- Config managed through .env and hardhat.config.js
- Used ethers.getContractFactory(), .waitForDeployment(), and .getAddress() to stay compatible with Ethers v6
























