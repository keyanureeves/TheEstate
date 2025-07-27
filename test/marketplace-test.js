const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy ReaLEstate1155
  const RealEstate = await ethers.getContractFactory("ReaLEstate1155");
  const realEstate = await RealEstate.deploy();
  await realEstate.deployed();
  console.log("ReaLEstate1155 deployed to:", realEstate.address);

  // Deploy MarketPlace with token address
  const MarketPlace = await ethers.getContractFactory("MarketPlace");
  const marketplace = await MarketPlace.deploy(realEstate.address);
  await marketplace.deployed();
  console.log("MarketPlace deployed to:", marketplace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});