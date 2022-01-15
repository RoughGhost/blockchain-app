require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/7qjwJJ0lLD43nMi7086W9vutZY4EwM0J",
      accounts: [
        "eb037334b6da63bf0e338c23af5a507ba1332a40655397b5cdae0390254d9ff2",
      ],
    },
  },
};
