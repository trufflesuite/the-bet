pragma solidity ^0.4.18;
import "./oraclizeAPI.sol"; // Used v0.5

contract Bet is usingOraclize {

    uint public outcome;
    uint jackpot;
    mapping bettors (address => uint);

    event newOraclizeQuery(string description);
    event newOutcome(string price);

    function Bet(address resolver) public {
        OAR = OraclizeAddrResolverI(resolver);
        update(); // first check at contract creation
    }

    function wager() public {
      bettors[msg.sender] = msg.value;
      jackpot += msg.value;
    }

    function claimWinnings() public {
      if (outcome == msg.sender){
        require(msg.sender.transfer(jackpot));
      }
    }

    function __callback(bytes32 myid, string result) public {
        require(msg.sender == oraclize_cbAddress());
        newOutcome(result);
        outcome = result;
    }

    function update() payable public {
        newOraclizeQuery("Oraclize query was sent, standing by for the answer..");
        oraclize_query("URL", "xml(https://github.com/trufflesuite/the-bet/tree/master/xml/outcome.xml).bet.outcome");
    }



}