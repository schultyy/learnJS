var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(usercode){
    results = [];
    eval(usercode);
    try{
      results.push(assert(typeof store != 'undefined', "store is defined"));
      results.push(assert(store.hasOwnProperty(nextId), "Store does not have a next nextId property"));
    }
    catch(error){
      
    }
    
    return results;
  }
};

function assert(expression, message){
  var testSuceeded = expression == true;
  if(testSuceeded){
    return new TestResults("Passed", message);
  }
  return new TestResults("Failed", message);
}

function TestResults(status, message){
  this.status = status;
  this.message = message;
}