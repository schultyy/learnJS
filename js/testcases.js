var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(objUnderTest){
    results = [];
    results.push(assert(objUnderTest.store, "Does not have a store object"));
    results.push(assert(objUnderTest.store.nextId, "Store does not have a next nextId property"));
    return results;
  }
};

function evaluate(codeStr){
  return (function(code){
    function inner(){
      eval(code);
    }
    return new inner();
  })(codeStr);
}

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