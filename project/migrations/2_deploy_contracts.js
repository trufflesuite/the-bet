var PetrolPrice = artifacts.require("PetrolPrice");

module.exports = function(deployer, network, accounts) {
    var resolver = 0;
    if (network == "testing" || network == "development") {
      // There's an issue here, name ethereum-bridge doesn't always
      // use this address....
      resolver = "0x2EfB9FF4A787b28C7c1429817b64BeE2E740ee55";
    }

    deployer.deploy(PetrolPrice, resolver);
};
