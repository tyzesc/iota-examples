// scripts/YCToken_deploy.js

const hre = require("hardhat");

async function main() {

  const Token = await hre.ethers.getContractFactory("YCToken");
  console.log('Deploying Token...');
  const token = await Token.deploy("9487000000000000000000");

  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });