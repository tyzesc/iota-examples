/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "iotaevm",
  networks: {
    iotaevm: {
      url: "https://evm.wasp.sc.iota.org",
      chainId: 1074,
      accounts: ["xxxxx"]
    }
  },
};
