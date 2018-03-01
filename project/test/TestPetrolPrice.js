const PetrolPrice = artifacts.require("PetrolPrice");

contract("PetrolPrice", function(accounts){

  it('should fetch the price on deployment', function(done){
    PetrolPrice.deployed().then(instance => {

      // Listen for the event that gets fired when Oraclize runs
      // the __callback function
      const event = instance.newPetrolPrice();

      event.watch((err, result) => {
        if (err){
          event.stopWatching();
          done(err);
        }

        // Then let's check our variable to make sure it updated.
        instance.PetrolPriceUSD().then(price => {
          assert(price > 0);
          event.stopWatching();
          done();
        })
      })
    });
  });
})
