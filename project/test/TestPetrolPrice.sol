pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/PetrolPrice.sol";

contract TestPetrolPrice {

  function testPriceCheck() public {
    PetrolPrice petrolprice = PetrolPrice(DeployedAddresses.PetrolPrice());

    uint whatweget = petrolprice.PetrolPriceUSD();
    uint notexpected = 0;

    Assert.notEqual(whatweget, notexpected, "Amount returned should be greater than 0.");
  }

}
