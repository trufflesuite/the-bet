var PetrolPrice = artifacts.require("PetrolPrice");

module.exports = function(deployer, network, accounts) {
  var resolver = 0;
  if (network == "test" || network == "development") {
    resolver = "0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475";
  }

  deployer.deploy(PetrolPrice, resolver);
};
