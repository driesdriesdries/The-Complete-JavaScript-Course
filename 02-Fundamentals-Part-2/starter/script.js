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

function logger(){
    console.log('My name is Dries');
}

//calling, running, invoking function
logger();

function fruitProcessor (apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    
    //saving the result of the function
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);