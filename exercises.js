[{
  "key": "exc_1",
  "title": "Add a function to an existing object",
  "description" : "In this example, add a method to an existing object by just assigning it to a property."
},
{
  "key" : "exc_2",
  "title" : "Add a function to an constructor",
  "description" : "Given the case, you want a method in every object you created with a constructor, how would you do this? Add it manually to every instance? The constructor can do this for you.",
  "code" : "function Ninja(){\n}"
},
{
  "key" : "exc_3",
  "title" : "Storing functions",
  "description" : "We want to store a collection of functions for callback management. The most challenging thing is, how can you be sure, that no function was added twice? The solution is, that every callback gets a unique id assigned.<br />Tasks:<ul><li>Create an object called <span class='code'>store</span></li><li><span class='code'>store</span> has a function called <span class='code'>add</span> which accepts a callback as argument</li><li><span class='code'>store</span> has a property called nextId which holds the next free id</li><li>Save all functions in an array called <span class='code'>cache</span></li><li>When a new callback is added, check if it has already an id assigned. If yes, discard. If no, assigned the next free id and add it to the cache.</li></ul>"
}]