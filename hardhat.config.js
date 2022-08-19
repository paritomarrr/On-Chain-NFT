require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/OzujnW2mqykK4E7aapNR3iOb8NuK2jFP",
      accounts: ['5975f1024d1d4db467fe7be8846a0045236440fd7726e0b42bf01cd817f1c61b']
    }
  }, 
  etherscan: {
    apiKey: "M28Q5C3E2WNGY3RP1P82YDHMMHMD1TPYMG"
  }
};
