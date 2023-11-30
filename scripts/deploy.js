const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const PriceConsumer = await hre.ethers.getContractFactory("PriceConsumerV3");
    const priceConsumer = await PriceConsumer.deploy();

    await PriceConsumer.deployed();

    console.log("Contract deployed to: ", priceConsumer.address);

    console.log("Deploying contracts with the account: ", deployer.address);

    const token = await ethers.deployContract("Token");

    console.log("Token address: ", await token.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })