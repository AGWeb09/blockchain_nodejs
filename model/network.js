var addressUtilities = require('../utils/address');
var arrayUtilities = require('../utils/array');

var network = function network(){

  var self = this;

  this.init = init;
  this.registerNode = registerNode;
  this.getNodes = getNodes;

  this.nodes;

  function init(){
    self.nodes = [];
  }

  function registerNode(address){
    var fixedAddress = addressUtilities.parseAddress(address);
    var found = arrayUtilities.addToSet(self.nodes, fixedAddress, ['host', 'port']);
    return found;
  }

  function getNodes(){
    return self.nodes;
  }

  if(network.caller != network.getInstance){
    throw new Error("This object cannot be instanciated");
  }

};


network.instance = null;
network.getInstance = function(){
	if(this.instance === null){
		this.instance = new network();
	}
	return this.instance;
};

module.exports = network.getInstance();
