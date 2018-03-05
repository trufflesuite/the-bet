var Bet = artifacts.require("Bet");

module.exports = function(deployer, network, accounts) {
    var resolver;
    if (network == "testing" || network == "development") {
      // Sometimes it's not this address! Check the ethereum-bridge output to be sure.
      resolver = "0x6f485c8bf6fc43ea212e93bbf8ce046c7f1cb475";
    }
    // resolver values for ropsten and other nets are contained in oraclizeAPI.sol

    deployer.deploy(Bet, resolver);
};
