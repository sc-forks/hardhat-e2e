require("@nomiclabs/hardhat-truffle5");
require("solidity-coverage");

module.exports = {
  solidity: { version: "0.5.5" },
  mocha: {
    reporter: "mocha-multi-reporters",
    reporterOptions: {
      reporterEnabled: "spec, mocha-junit-reporter",
    }
  }
};
