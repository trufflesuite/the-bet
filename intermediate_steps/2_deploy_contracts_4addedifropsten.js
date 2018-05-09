var Bet = artifacts.require("Bet");

module.exports = function(deployer, network, accounts) {
    var resolver;
    if (network == "development") {
      // Sometimes it's not this address! Check the ethereum-bridge output to be sure.
      resolver = "0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475";
    } else if (network === "ropsten") {
      resolver = "0xc03A2615D5efaf5F49F60B7BB6583eaec212fdf1";
    } else {
      var err = "No migrations logic exists for network: " + network;    
      throw new Error(err);
    }
    // resolver values for ropsten and other nets are contained in oraclizeAPI.sol

    deployer.deploy(Bet, resolver);
};
