const PetrolPrice = artifacts.require("PetrolPrice");

contract("PetrolPrice", function(accounts){

  it('should fetch the price on deployment', async function(){
    const instance = await PetrolPrice.deployed();
    const price = await instance.PetrolPriceUSD();
    console.log("price --> " + parseInt(price));
    assert(price > 0);
  })
})
