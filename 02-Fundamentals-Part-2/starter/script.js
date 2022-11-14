'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// //Reserved word
// // const interface = 'Audio';
// // const private = 's33';

// Lesson 33
//Functions

// function logger(){
//     console.log('My name is Dries');
// }

// //calling, running, invoking function
// logger();

// function fruitProcessor (apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    
//     //saving the result of the function
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Lesson 34 

// Function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function Expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1990);

// console.log(age1, age2);

// // Function declarions can be called before they are define. 

//Lesson 36 Functions calling other functions

function cutFruitPieces(fruit){
    return fruit* 4;
}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(5,10)); 