//declaring a variable
let country = "South Africa";
let continent = "Africa";
let population = "50000000";

console.log(country);
console.log(continent);
console.log(population);

//opening the console on Windows with chrome cntrl shift J
// opening terminal in VS code with windows cntrl J

//data types
// Numbers | used for decimals and integers = let age = 23;
// Strings | used for text = let firstName = "Dries";
// Boolean | logical type used for decisions = let fullAge = true/false;
// undefined | let children;
// NULL | Empty value | 
// Symbol (ESS2015) | value that is unique and cannot be changed
// Big int | another type for massive numbers

//Javascript has dynamic typing. ie, we do not have to declate the data type.
// variable can be assigned a new data type 

// can quickly create a comment with cntl slash

let jsIsFun = true;
console.log(typeof jsIsFun);
// console.log(typeof firstName);
// console.log(typeof "Driesie");
// console.log(typeof 55);

//when declaring a variable for the first time, you need to use let
//when changing its type, you only write the name

jsIsFun = "Yolo";
console.log(typeof jsIsFun);

let year;
//value is undefined
console.log(year);
//datatype is also undefined
console.log(typeof year);

year = 1991;
console.log(typeof year);

//bug in javascript. It's not an object
console.log(typeof null);

//This is a test
