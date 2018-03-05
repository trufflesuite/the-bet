/*
//For local
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  }
};
*/

//For Ropsten
module.exports = {
  networks: {
    testing: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      gas: 4000000
    }
  }
};
