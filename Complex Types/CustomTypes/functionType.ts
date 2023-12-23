// Function Type

let myFavoriteFunction = console.log; // Note the lack of parentheses.
myFavoriteFunction('Hello World'); // Prints: Hello World

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

/*
This syntax is just like arrow notation for functions, except instead of the return value 
we put the return type. In this case, the return type is number. Because this is just a 
type, we did not write the function body at all. A variable of type StringsToNumberFunction 
can be assigned any compatible function:
*/

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.
