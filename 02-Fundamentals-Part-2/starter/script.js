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

// function cutFruitPieces(fruit){
//     return fruit* 4;
// }

// function fruitProcessor (apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5,10)); 

// Function wat die sq meter uitwerk van n badkamer met n input van width en height
//die result van die function is n sq meter, wat as input opgeneem word in n nuwe function.
//Die nuwe function werk uit total flat squares minus apartment en print dan die value van dit op die console.

// const bathSquares = function(width, height) {
//     const totalSquares = width*height;
//     return totalSquares;
// }

// console.log(bathSquares(5,5));
// ////

// const flatTotal = function(apartmentSize, bathSize){
//     const sansBath = apartmentSize - bathSize;
//     return sansBath;
// }

// const firdaleMansionsSize = flatTotal(82, bathSquares(2,3));
// const illovoCourtSize = flatTotal(100, bathSquares(8,7));


// console.log(`the total area of illovo without bathroom is ${illovoCourtSize}`);
// console.log(`the total area of firdale without bathroom is ${firdaleMansionsSize}`);

//flat area calculator idea
// a function that calculates the size of the apartment that is comprised of bathroom, bedroom, kitchen

//Roomsize calculator
//arguments here width and height for each room

// const roomSize = function(width, height){
//     const surfacearea = width*height;
//     return surfacearea;
// }

// const meulenhofKitchenSize = roomSize(2,3);
// const meulenhofBathroomSize = roomSize(2,3);
// const meulenhofBedroomSize = roomSize(4,4);

// //apartmentSqaureMeterCalculator
// const apartmentSqaureMeterCalculator = function(kitchenSize, bathroomSize, bedroomSize){
//     const total = kitchenSize+bathroomSize+bedroomSize;
//     return total;
// }

// const meulenhofSize = apartmentSqaureMeterCalculator(meulenhofKitchenSize,meulenhofBathroomSize,meulenhofBedroomSize);
// console.log(meulenhofSize);


// const age = function(birthYear, currentYear){
//     return currentYear-birthYear;
// }

// console.log(age(1988, 2022));

// function age(birthYear, currentYear){
//     return currentYear-birthYear;
// }

// var age = (age(1994,2022));
// console.log(age);

//practicing an arrow function

// const birthyear = yourAge => 2022-yourAge;
// // console.log(birthyear(64));

// const driesBirthYear = birthyear(34);
// console.log(driesBirthYear);

// const ageUntilRetirement = (birthYear, firstName)=> {
//     const age = 2022 - birthYear;
//     const yearsUntilRetirement = 65 - age;
//     return `${firstName}'s time until retirement is still ${yearsUntilRetirement} years away`;
// }

// console.log(ageUntilRetirement(1988, 'Dries'));
// console.log(ageUntilRetirement(1992, 'Anneke'));

// function createfullName (firstName, lastName){
//     return firstName+" " +lastName;
// }

// const driesfullName = createfullName('Dries','Bester');
// const annekefullName = createfullName('Anneke','van Zyl');


// console.log(driesfullName);
// console.log(annekefullName);

// const fruitCutter = function(fruit){
//     return fruit * 8;
// }

// const fruitProcessor = function(apples, oranges){
//     //first, it needs to cut the apple pieces
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// // console.log(fruitProcessor(55,100));

// // write a function that asks a user his name and saves it to a variable called username
// const userName = function(userName){
//     return userName;   
// }

// //console.log(userName('Dries'));

// //write a function that takes a result of username function and adds a hardcoded lastname to it.
// const fullName = function(firstName){
//     const name = userName(firstName);
//     const lastName = 'kokie';
//     return firstName + " " +lastName;
// }

// console.log(fullName('Anneke'));

// //Section 3 - coding challenge #1

// const calcAverage = (numberOne,numberTwo,numberThree)=> (numberOne+numberTwo+numberThree)/3;
// // console.log(calcAverage(10,50,22));
// // const dolphinAverageScore = calcAverage(44,23,71);
// // const koalaAverageScore = calcAverage(65,54,49);

// const dolphinAverageScore = calcAverage(85,54,41);
// const koalaAverageScore = calcAverage(23,34,32);

// console.log(dolphinAverageScore, koalaAverageScore);

// function checkWinner (averageScoreValueOne,averageScoreValueTwo){
//     //if score 1 > than score 2 AND is more than double
//     if (averageScoreValueOne >= 2*averageScoreValueTwo){
//         console.log(`the dolphins win ${averageScoreValueOne} to ${averageScoreValueTwo}`);
//     }
//     //if score 1 > than score 2 AND is not more than double
//     else if (averageScoreValueOne > averageScoreValueTwo && averageScoreValueOne < (averageScoreValueTwo*2)) {
//         console.log(`the dolphins win, but not conclusively`);
//     }
//     //if score 2 > than score 1 AND is more than double
//     else if (averageScoreValueTwo > averageScoreValueOne && averageScoreValueTwo > (averageScoreValueOne*2)){
//         console.log(`the Koalas win ${averageScoreValueTwo} against ${averageScoreValueOne}`);
//     }
//     //if score 2 > than score 1 AND is not more than double
//     else {
//         console.log(`the koalas win, but not conclusively`);
//     }
// }

// checkWinner(dolphinAverageScore, koalaAverageScore);

// const cars = ['honda','fiat','uno'];
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log('pause');
// console.log(cars.length);
// console.log(cars.length - 1);
// console.log(cars[cars.length -1]);


// cars[2] = 'mercedes';
// console.log(cars);


// const years = ['1998','1997','1996','1995','1994'];

// function ageCalc(yourYear){
//     const age = 2022-yourYear;
//     return age;
// }

// const age1 = years[0];
// const age2 = years[1];
// const age3 = years[2];

// const ages = [ageCalc(years[0]),ageCalc(years[1]), ageCalc(years[2])]
// console.log(ages);
// console.log(ages.length);

// // console.log(age1);

// // console.log(birthyearcalc(1988));
// // console.log(birthyearcalc(age1));
// // console.log(birthyearcalc(age2));
// // console.log(birthyearcalc(age3));


// const numbers = [300,3000,30000];
// const divideByThree = function(x) {
//     return x/3;
// }

// const postdivisionnumbers = [divideByThree(numbers[0]),divideByThree(numbers[1]), divideByThree(numbers[2])];
// console.log(postdivisionnumbers);
// console.log(postdivisionnumbers[2]);

//Lesson 40 - Basic Array operators (methods)

// const toys = ['gun',47,true];

// //Adding an element to the end of an array via PUSH. returns the length of the array
// console.log(toys);
// const newLength = toys.push('conan');
// console.log(toys);
// console.log(newLength);

// // Adding elements to the beginning of an array via unshift
// const friends = ['Jean','Fred','Marco'];
// console.log(friends);
// friends.unshift('Kimon');
// console.log(friends);

// //remove elements 
// const bringFriend = friends.pop(); //Removes Last - no argument needed - It returns the removed element
// console.log(friends);
// console.log(bringFriend);

// friends.shift();  //Deletes first element
// console.log(friends);

// console.log(friends.indexOf('Fred')); //returns the index position of specific value in an array
// console.log(friends.indexOf('Tonie')); // not in array returns -1

// console.log(friends.includes('spiderman'));
// console.log(friends.includes('marco'));
// console.log(friends.includes('Jean'));

// friends.push('guy','royce','Angel');
// console.log(friends);

// console.log( friends.includes('guy'));

// if ( friends.includes('Jean') || friends.includes('George') ){
//     console.log(`you have a friend with one or two of those names`);
// } else {
//     console.log(`No friends with that name`);
// }

// // how to remove a specific item in the array
// console.log(friends);

