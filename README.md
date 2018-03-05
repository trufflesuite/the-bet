# the-bet
Truffle project to look to an external service to determine who wins a contract. Used with an upcoming Truffle video.

# Install and run tests
```shell
// Clone
git clone --recursive https://github.com/trufflesuite/the-bet.git

// Install ethereum-bridge
cd project/ethereum-bridge
npm install

// Then open a new tab and run:
npm run ganache

// Then from the ethereum-bridge folder run (wait a bit while it boots)
node bridge -H localhost:8545 -a 1

// Then open another tab and navigate to the root of the truffle repository and run:
truffle migrate --reset --network testing
truffle test --network testing.
```




