let istanbulFolder

if (process.env.CI){
  //istanbulFolder = `/tmp/workspace/cov_${process.env.CIRCLE_NODE_INDEX}`
}

module.exports = {
  // There's a bug in solidity-coverage that causes it not
  // to inherit the hardhat.config.js mocha config correctly.
  // Need to duplicate that config here...
  mocha: {
    reporter: "mocha-multi-reporters",
    reporterOptions: {
      reporterEnabled: "spec, mocha-junit-reporter",
    }
  }
}