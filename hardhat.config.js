require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

const INFURA_URL = process.env.INFURA_API_KEY;
const SEPOLIA_KEY = process.env.SEPOLIA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: INFURA_URL,
      accounts: [SEPOLIA_KEY]
    }
  }
};
