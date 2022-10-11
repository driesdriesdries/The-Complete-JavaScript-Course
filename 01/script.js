// //declaring a variable
// let country = "South Africa";
// let continent = "Africa";
// let population = "50000000";

// console.log(country);
// console.log(continent);
// console.log(population);

// //opening the console on Windows with chrome cntrl shift J
// // opening terminal in VS code with windows cntrl J

// //data types
// // Numbers | used for decimals and integers = let age = 23;
// // Strings | used for text = let firstName = "Dries";
// // Boolean | logical type used for decisions = let fullAge = true/false;
// // undefined | let children;
// // NULL | Empty value | 
// // Symbol (ESS2015) | value that is unique and cannot be changed
// // Big int | another type for massive numbers

// //Javascript has dynamic typing. ie, we do not have to declate the data type.
// // variable can be assigned a new data type 

// // can quickly create a comment with cntl slash

// let jsIsFun = true;
// console.log(typeof jsIsFun);
// // console.log(typeof firstName);
// // console.log(typeof "Driesie");
// // console.log(typeof 55);

// //when declaring a variable for the first time, you need to use let
// //when changing its type, you only write the name

// jsIsFun = "Yolo";
// console.log(typeof jsIsFun);

// // let year;
// //value is undefined
// //console.log(year);
// //datatype is also undefined
// //console.log(typeof year);

// //year = 1991;
// //console.log(typeof year);

// //bug in javascript. It's not an object
// console.log(typeof null);

// //let is used to declare variables that can change/mutated later
// let age = 30;
// age = 31;
// //You are allowed to declare empty vairables with let


// //Const is used to declare a variable that will never change
// //const birthYear = 1988;
// // birthYear = 1989;
// //console.log(typeof birthYear);
// //You are not allowed to declare empty vairables with const

// //by default, rather used const, unless super sure the 

// //var should be avoided as it's legacy stuff. Works the same as let. variables can also be mutated
// //make sure to properly declare variables.


// //Math Operators Lesson

// const now = 2037;

// const ageDries = now - 1991;
// const ageSarah = now - 2018;

// //One can log mulitple values in the same declaration
// console.log(ageDries, ageSarah);

// //2 ** 3 means 2 to the power of 3
// console.log(ageDries * 2, ageDries/10, 2 ** 3);

// //One can concatenate by using a + symbol
// //const firstName = "Dries";
// const lastName = "Bester";
// //My own monster
// const oneSpaceString = " ";

// ///console.log(firstName + " " +lastName);
// //console.log(firstName + oneSpaceString +lastName);

// //Assignment operators
// // let x = 10 + 5; //15
// // x += 10; // x = x+10 which makes it 25
// // x *= 4; //x= x*4; ie 100
// // x++; // x= x+1;
// // x--; // x= x-1;
// // x--; // x= x-1;
// // console.log(x);

// //Comparison Operators
// //Used to produce boolean values

// //try to figure out if dries is greater than sarah
// console.log(ageDries > ageSarah);
// console.log(ageDries < ageSarah);
// console.log(ageSarah >= 18);

// //const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// // Order of operator precendence
// // Declaring two variables at once
// let x, y;

// x = y = 25 - 10 -5;
// console.log(x,y)
// // subtraction has higher precendence than assignment

// const averageAge = (ageDries + ageSarah) / 2;
// console.log(ageDries, ageSarah, averageAge);

// // Coding Challenge #1
// // BMI = mass / height ** 2
// // BMI = mass / height * height

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / (markHeight*markHeight);
// console.log('Mark has a BMI of' + oneSpaceString + markBMI);

// const johnBMI = johnWeight / (johnHeight*johnHeight);
// console.log('John has a BMI of' + oneSpaceString + johnBMI);

// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);

// //Strings and template literals
// console.log("this is the start of lesson 17");

// const firstName = "Dries";
// const job = "Teacher";
// const birthYear = "1988";
// const year = 2022;

// const dries = "I'm " +oneSpaceString + firstName + ", my job is that of a " + job + " and I am " +(year-birthYear) + " years old";
// console.log(dries);

// //Template literal can combined mulitple pieces into a single string
// const driesNew = `I'm ${firstName}, a ${job}, and I was born in ${year-birthYear}` ;
// console.log(driesNew);

// //Template literals can alos be used for multi line strings
// console.log('this is a classic \n\
// way of writing multi \n\
// line strings in JS');

// console.log(`testing this
// new way
// of doing things`);


// Lesson 18 - Control Structures
const age = 15;

//Example of an if else control structure. Allows us to have more control over how code is executed
if ( age >= 18) {
    console.log(`Sarah can start driving 🚗`);
    // emoji an be made with cmd cntrl space
} else {
    const yearsLeft = 18-age;
    console.log(`unfrotunately sarah cannot drive yet 😢. She still has ${yearsLeft} years to wait`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);