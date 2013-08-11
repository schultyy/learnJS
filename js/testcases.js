var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(usercode){
    results = [];
    eval(usercode);
    try{
      results.push(assert(typeof store !== 'undefined', "store is defined"));
      results.push(assert(store.hasOwnProperty("nextId"), "Store has a next nextId property"));
    }
    catch(error){
      
    }
    
    return results;
  }
};

function assert(expression, message){
  if(expression){
    return {status: "Passed",message: message};
  }
  return {status: "Failed",message: message};
}