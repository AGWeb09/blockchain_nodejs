var ValidatorHandler = function ValidatorHandler(){

  var self = this;

  this.calculateHash = calculateHash;
  this.generateProof = generateProof;

  function calculateHash(transaction){
    if(!transaction || transaction.sender === undefined || transaction.receiver === undefined){
      console.log("calculateHash: " , JSON.stringify(transaction), "false");
      return false;
    }
    console.log("calculateHash: " , JSON.stringify(transaction), "true", generateHashFromString(transaction.sender)+"-"+generateHashFromString(transaction.receiver)+"-0"+(new Date().getTime().toString(16)));
    return generateHashFromString(transaction.sender)+"-"+generateHashFromString(transaction.receiver)+"-0"+(new Date().getTime().toString(16));
  }

  function generateProof(transaction){
    if(!transaction || transaction.sender === undefined || transaction.receiver === undefined || transaction.amount === undefined){
      console.log("generateProof: " , JSON.stringify(transaction), "false");
      return false;
    }
    if(transaction.sender === 0){
      console.log("generateProof: " , JSON.stringify(transaction), "0", generateIntegerFromAddress(transaction.receiver) * parseFloat(transaction.amount));
      return generateIntegerFromAddress(transaction.receiver) * parseFloat(transaction.amount);
    }
    console.log("generateProof: " , JSON.stringify(transaction), "true" , Math.abs(generateIntegerFromAddress(transaction.sender)-generateIntegerFromAddress(transaction.receiver)) * parseFloat(transaction.amount));
    return Math.abs(generateIntegerFromAddress(transaction.sender)-generateIntegerFromAddress(transaction.receiver)) * parseFloat(transaction.amount);
  }

  function generateHashFromString(string){
    var hex, i;
    var result = "";
    for (i=0; i<string.length; i++) {
      hex = string.charCodeAt(i).toString(16);
      result += ("0"+hex).slice(-4);
    }
    console.log("generateHashFromString: ", string, result);
    return result;
  }

  function generateIntegerFromAddress(address){
    console.log("generateIntegerFromAddress: " , address, parseInt(address.match(/[0-9]+/g).join("")));
    return parseInt(address.match(/[0-9]+/g).join(""));
  }

  if(ValidatorHandler.caller != ValidatorHandler.getInstance){
    throw new Error("This object cannot be instanciated");
  }

};


ValidatorHandler.instance = null;
ValidatorHandler.getInstance = function(){
  if(this.instance === null){
    this.instance = new ValidatorHandler();
  }
  return this.instance;
};

module.exports = ValidatorHandler.getInstance();
