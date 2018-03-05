const Bet = artifacts.require("Bet");

contract("Bet", function(accounts){

  it('should fetch the bet outcome on deployment', function(done){
    Bet.deployed().then(instance => {

      // Listen for the event that gets fired when Oraclize runs
      // the __callback function
      const event = instance.newOutcome();

      event.watch((err, result) => {
        if (err){
          event.stopWatching();
          done(err);
        }

        // Then let's check our variable to make sure it updated.
        instance.outcome().then(outcome => {
          assert(outcome === "noResult");
          event.stopWatching();
          done();
        })
      })
    });
  });

  it('should add a bet and pay out a jackpot', async function() {
    const amountToBet = 10;
    const bet = await Bet.deployed();
    const initialJackpot = await bet.jackpot();

    await bet.wager({from: accounts[0], value: amountToBet});

    const newJackpot = await bet.jackpot();

    assert.equal(initialJackpot.toNumber() + 10, newJackpot.toNumber(), "Jackpot should increase");

    const initialAccountBalance = web3.eth.getBalance(accounts[0]);
    await bet.claimWinnings({from: accounts[0]});
    const newAccountBalance = web3.eth.getBalance(accounts[0]);

    assert(newAccountBalance.toNumber() > initialAccountBalance.toNumber());
  });
});
