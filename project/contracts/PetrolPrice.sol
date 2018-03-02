pragma solidity ^0.4.18;
import "./oraclizeAPI.sol"; // Used v0.5

contract PetrolPrice is usingOraclize {

    uint public PetrolPriceUSD;

    event newOraclizeQuery(string description);
    event newPetrolPrice(string price);

/*
//original
    function PetrolPrice() public {
        // OAR = OraclizeAddrResolverI(<Ethereum bridge address>);
        update(); // first check at contract creation
    }
*/

    function PetrolPrice(address resolver) public {
        OAR = OraclizeAddrResolverI(resolver);
        update(); // first check at contract creation
    }

    function __callback(bytes32 myid, string result) public {
        require(msg.sender == oraclize_cbAddress());
        newPetrolPrice(result);
        PetrolPriceUSD = parseInt(result, 2); // Will output USD cents
    }

    function update() payable public {
        newOraclizeQuery("Oraclize query was sent, standing by for the answer..");
        oraclize_query("URL", "xml(https://www.fueleconomy.gov/ws/rest/fuelprices).fuelPrices.regular");
    }

}
