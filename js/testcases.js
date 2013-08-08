var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(usercode){
    results = [];
    eval(usercode);
    try{
      results.push(assert(store, "Does not have a store object"));
      results.push(store.hasOwnProperty(nextId), "Store does not have a next nextId property");
    }
    catch(error){
      results.push(error);
    }
    
    return results;
  }
};

function assert(expression, message){
  var testSuceeded = expression == true;
  if(testSuceeded){
    return new TestResults("Passed");
  }
  return new TestResults("Failed", message);
}

function TestResults(status, message){
  this.status = status;
  this.message = message;
}