var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(){
    
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