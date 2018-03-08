pragma solidity ^0.4.18;
import "./oraclizeAPI.sol"; // Used v0.5

contract Bet is usingOraclize {

    uint public outcome;
    uint public jackpot;
    mapping(address => uint) public bettors;

    event newOraclizeQuery(string description);
    event newOutcome(string result);

    // main constructor, first check at contract creation
    function Bet(address resolver) public {
        // need to define resolver address
        OAR = OraclizeAddrResolverI(resolver);
        update();
    }

    // predict an outcome, caller can bet some ether
    function wager(uint prediction) public payable {
      bettors[msg.sender] = prediction;
      jackpot += msg.value;
    }

    // check outcome, if yours, collect ether
    function claimWinnings() public {
      if (bettors[msg.sender] == outcome){
        msg.sender.transfer(jackpot);
        jackpot = 0;
      }
    }

    // ensure validity of request, parse result
    function __callback(bytes32 myid, string result) public {
        require(msg.sender == oraclize_cbAddress());
        newOutcome(result);
        outcome = parseInt(result);
    }

    // check external site for data
    function update() payable public {
        newOraclizeQuery("Oraclize query was sent, standing by for the answer...");
        oraclize_query("URL", "xml(https://raw.githubusercontent.com/trufflesuite/the-bet/master/xml/outcome.xml).bet.outcome");
    }
}
