const FundDistribution = artifacts.require("FundDistribution");

module.exports = function (deployer) {
  deployer.deploy(FundDistribution);
};
