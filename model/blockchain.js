var addressUtilities = require('../utils/address');
var arrayUtilities = require('../utils/array');

var blockchain = function blockchain(){

  var self = this;

  this.init = init;
  this.newBlock = newBlock;
  this.newTransaction = newTransaction;
  this.hash = hash;
  this.lastBlock = lastBlock;
  this.getChain = getChain;

  this.chain;
  this.currentTransactions;

  function init(){
    self.chain = [];
    self.currentTransactions = [];
    self.newBlock(100, 1);
  }

  function getChain(){
    return self.chain;
  }

  function newBlock(proof, previousHash){

  }


  function hash(){}
  function lastBlock(){}

  var newTransaction = function(sender, receiver, amount){
    self.currentTransactions.push({
      sender: sender,
      receiver: receiver,
      amount: amount
    });

    return self.lastBlock[index]+1;
  }


  if(blockchain.caller != blockchain.getInstance){
    throw new Error("This object cannot be instanciated");
  }

};


blockchain.instance = null;
blockchain.getInstance = function(){
	if(this.instance === null){
		this.instance = new blockchain();
	}
	return this.instance;
};

module.exports = blockchain.getInstance();
