require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const POLYGON_MUMBAI_RPC = process.env.POLYGON_MUMBAI_RPC || "https://rpc-mumbai.maticvigil.com";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_RPC,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
    hardhat: {
      chainId: 1337,
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY || "",
  },
};
