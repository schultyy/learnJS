var PASSED = "Passed";
var FAILED = "Failed";

var testCatalog = {
  "exc_3" : function(usercode){
    results = [];
    eval(usercode);
    try{
      results.push(assert(typeof store !== 'undefined', "store is defined"));
      results.push(assert(store.hasOwnProperty("nextId"), "Store has a next nextId property"));
      results.push(assert(store.hasOwnProperty("add") && typeof store.add == "function", "Store has add method"));
      results.push(assert(store.hasOwnProperty("cache"), "Store has cache property"));

      
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