let istanbulFolder

if (process.env.CI){
  istanbulFolder = `/tmp/workspace/cov_${process.env.CIRCLE_NODE_INDEX}`
}

module.exports = {
  istanbulFolder
}