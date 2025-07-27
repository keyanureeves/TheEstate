const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy ReaLEstate1155
  const ReaLEstate1155 = await ethers.getContractFactory("ReaLEstate1155");
  const realEstate = await ReaLEstate1155.deploy();
  await realEstate.waitForDeployment(); // Use waitForDeployment instead of deployed()
  const realEstateAddress = await realEstate.getAddress();
  console.log("ReaLEstate1155 deployed to:", realEstateAddress);

  // Deploy MarketPlace with ReaLEstate1155 address
  const MarketPlace = await ethers.getContractFactory("MarketPlace");
  const marketPlace = await MarketPlace.deploy(realEstateAddress);
  await marketPlace.waitForDeployment(); // Use waitForDeployment instead of deployed()
  const marketPlaceAddress = await marketPlace.getAddress();
  console.log("MarketPlace deployed to:", marketPlaceAddress);

  // Verify contracts on Etherscan (optional)
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying contracts on Etherscan...");
    await hre.run("verify:verify", {
      address: realEstateAddress,
      constructorArguments: [],
    });
    await hre.run("verify:verify", {
      address: marketPlaceAddress,
      constructorArguments: [realEstateAddress],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });