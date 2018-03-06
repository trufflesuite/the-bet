# the-bet
Truffle project to look to an external service to determine who wins a contract. Used with an upcoming Truffle video.

# Install and run tests
+ Clone this repository
```shell
git clone --recursive https://github.com/trufflesuite/the-bet.git
```

+ Install ethereum-bridge
```shell
cd project/ethereum-bridge
npm install
```

+ Open a new tab and run:
```shell
npm run ganache
```

+ From the ethereum-bridge folder run (wait a bit while it boots)
```shell
node bridge -H localhost:8545 -a 1
```

+ Open another tab, navigate to the root of the truffle repository and run:
```shell
truffle migrate --reset --network testing
truffle test --network testing.
```

+ To get a report of estimated deployment costs (See tests and truffle.js config for simulation and setup.)
```shell
npm install -g mocha@3
npm install -g eth-gas-reporter
```



