# blockchain_nodejs

This project is just a way for me to analyze the Blockchain technology, by building one on Node.JS.

This is an experiment, meant in no way as a tool able to go in production or in a stable product.

Using *express.js* with *NodeJS*, the final purpose is to realize a small personal server that allows registering of new nodes, mining new blocks and checking the chain validity.

## Model

It contains the core implementations of mine blockchain.

### Blockchain.js

* **newBlock** (proof, previousHash) => block
  Generate a new block given the already calculated proof and the previous Hash and returns the obtained block
* **newTransaction** (sender, receiver, amount) => transaction
  Generate a new transaction and adds it to the currentTransactions array which will be added in the next new block
* **mine** (miner) => block
  Mines a new block, assigns it to the miner and generate the associated block

### Network.js

* **registerNode** (address) => boolean
  Enable the insertion of new nodes and returns if the address has been added (cannot add twice the same address)
* **nodeExists** (address) => boolean
  Fetches in the nodes array if the provided node already exists and returns this information
