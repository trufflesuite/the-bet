var Bet = artifacts.require("Bet");

module.exports = function(deployer, network, accounts) {
    var resolver;
    if (network == "testing" || network == "development") {
      // Sometimes it's not this address! Check the ethereum-bridge output to be sure.
      resolver = "0x6f485c8bf6fc43ea212e93bbf8ce046c7f1cb475";
    } else if (network === "ropsten") {
      resolver = "0xc03A2615D5efaf5F49F60B7BB6583eaec212fdf1";
    } else {
      var err = "No migrations logic exists for network: " + network;
      throw new Error(err);
    }

    deployer.deploy(Bet, resolver);
};
