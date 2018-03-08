var Bet = artifacts.require("Bet");

module.exports = function(deployer) {
    var resolver;
    deployer.deploy(Bet, resolver);
};
