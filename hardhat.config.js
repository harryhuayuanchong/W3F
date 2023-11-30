require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

const INFURA_URL = process.env.INFURA_API_KEY;
const SEPOLIA_KEY = process.env.SEPOLIA_PRIVATE_KEY;

// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
// const PRIVATE_KEY = process.env.PRIVATE_KEY || "abcdef";

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
