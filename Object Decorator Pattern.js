// Object Decorator Pattern

var amy = {loc:1}; // enemy car that contains an object that stores a location 
// ^ in memory model: var amy -> {}.loc (in memory object with property, loc) -> {1}  
amy.loc++;

var ben = {loc:9}; 
ben.loc++; 

// let's build a fcn for loc++; 
// pretend that the below is saved in a separate file (library.js)
var move = function (car) {
	car.loc++; // car = car + 1;
};

// this would make our run.js file look like:
var amy = {loc:1};
move(amy); // instead of amy.loc++, we are applying the function move to the object amy 
var ben = {loc:9};
move(ben);


// now let's build a function to create car objects (lines 3, 7 in the original code)
var carlike = function (obj, loc) { // accepts object and property as params 
// convention is to use adjective name for functions that augment an object (decorators)
	obj.loc = loc; // augments obj with the passed-in property 
	return obj; // returns the augmented object
};

// Refactor the code to call the function using dot notation amy.move(), looking up move as a property of amy before invoking it on amy 
// functions are properties too

var carlike = function (obj, loc) {
	obj.loc = loc;
	obj.move = move; // adds the move property on each obj
	return obj;
};

var move = function () { // no longer takes the car parameter as an argument for .move
	// the target obj will now be amy or ben (object at the left of the dot at call time)
	this.loc++; // replace "car" with the parameter "this" bc the object will be bound to .loc++ at call time 
};

// Refactor the code to take the move function into the carlike decorator function
var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = function() { // replace var "move" with the actual move function
		this.loc++; // a new function instance is generated everytime you run carlike - expensive!
	};
	return obj;
};

// Why is a new function generated each time carlike is run? Example below. 
var makeAnObject = function () {
	return {example: 'property'};
};
var ob1 = makeAnObject();
var ob2 = makeAnObject();
console.log(ob1 === ob2); // false -> even though the same line of code generates ob1 and ob2, they are 2 different objects

var makeAnObject1 = function () {
	return function(){};
};
var ob1 = makeAnObject1();
var ob2 = makeAnObject1();
console.log(ob1 === ob2); // false -> even though the same line of code generates ob1 and ob2, they are 2 different objects

