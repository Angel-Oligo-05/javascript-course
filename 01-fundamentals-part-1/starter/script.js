// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
 
 
// console.log("=== VARIABLES ===");
 
 
// let firstName = "Jonas";
// console.log(firstName);
 
 
// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);
 
 
// const birthYear = 1991;
// console.log(birthYear);
 
 
// const PI = 3.1415;
// console.log(PI);
 
 
// var job = "programmer";
// job = "teacher";
// console.log(job);
 
 
// const country = "Philippines";
// const language = "Filipino";
 
// age = 25;
// age = 26;
 
 
// console.log("=== DATA TYPES ===");
 
// //number
// let id = 12345;
// console.log(id);
// console.log(typeof id);
 
// //String
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);
 
// //Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);
 
// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);
 
// //change to number
// let dynamicVariable = 50;
// console.log(dynamicVariable, typeof dynamicVariable);
 
// //change to string
// dynamicVariable = "I am now a string";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// //change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);
 
 
// console.log("=== MATH OPERATIONS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// console.log("Math Operations");
// console.log("Addition", 10 + 5);
// console.log("Subtraction", 20 - 8);
// console.log("Multiplication", 4 * 7);
// console.log("Division", 15 / 3);
// console.log("Exponentiation", 2 ** 3);
 
// //Math with strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
 
// console.log("Hello" + "World" + "!");
 
// //Assignment operators
// console.log("=== ASSIGNMENT OPERATORS===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 4;
// console.log("x starts as:", x);
 
// x /= 2;
// console.log("x starts as:", x);
 
// x ++;
// console.log("x starts as:", x);
 
// x --;
// console.log("x starts as:", x);
 
 
// //comparison operartors
// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah > 18);
// console.log(ageSarah < 30);
 
// console.log("Number comparison");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);
 
// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);
 
 
// let z, y;
// z = y = 25 - 10 -5;
// console.log(z, y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// console.log(massMark / heightMark ** 2);
// console.log(massJohn / heightJohn ** 2);
 
// const markBMI = 27.30;
// const johnBMI = 24.19;
 
// const markHigherBMI = markBMI > johnBMI;
// console.log("markHigherBMI");
// console.log(markBMI > johnBMI);
 
 
 
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas = "I'm" + firstName + ", a" + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(jonasNew);
 
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);
 
// //if else statement
// const age = 17;
 
// if (age >= 18) {
//     console.log(`Sarah can go to bar`)
// } else {
//     const yearsLeft = 18- age;
//     console.log(`Sarah is too young, wait for ${yearsLeft} years`);
// }
   
 
// console.log(Boolean(0)); //falsy value
// console.log(Boolean(undefined)); //falsy value
// console.log(Boolean("Jonas")); //trutty value
// console.log(Boolean({})); //trutty value
// console.log(Boolean("")); //falsy value
 
// // Coding Challenge #2
 
// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
 
// // Your if/else statement here:
 
// if (BMIMark >= BMIJohn) {
//     console.log(`Mark's BMI is ${BMIMark} which is higher than John's BMI ${BMIJohn}!`);
// } else {
// }
 
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
 
 
// Type Conversion and Coercion
 
// type conversion (manual)
// const inputYear ="1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
 
// console.log(Number("Jonas"));
// console.log(typeof NaN);
 
// console.log(String(23), 23);
// console.log(typeof String(23));
 
// //Automatic Type Coercion
// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` - `10` - 3);
// console.log(`23` / `2`);
//  console.log(`23` * `2`);
 
//  let n = `1` + 1;
//  console.log(n);
 
//  n = n - 1;
//  console.log(n);
 
// //  //type conversion = explicit/manual (recommended)
// //  //type coercion = implicit/automatic (javascript does itself)
 
 
// //  //Equality - Strict
 
//  const age = `18`;
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");
 
// console.log("18" === 18);
// console.log("18" == 18); //coercion happens
// console.log(18 === 18);
 
 
// // Why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined); //special case
 
// console.log("" == 0);
// console.log("   " == 0);
 
// //best practice
// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
 
// if (favourite === 23) {
//     console.log("Yis galing! 23 is an amazing number!");
//  }  if (favourite == 23) {
//     console.log("23 string is also a nice number!");
//  } else if (favourite === 9) {
//     console.log("9 is also a great number!");
//  } else {
//     console.log("Ouch! Number is not 23 or 7 or 9");
//  }
 
//  if (favourite !== 23) console.log("Why not 23 beh?");
 
 
 
// Test equality operators
// let userInput = "25";
 
// console.log("== comparison:", userInput == 25);  
// console.log("=== comparison:", userInput === 25);
 
// let converted = Number(userInput);
// console.log("Converted ===:", converted === 25);
 
 
// let testValues = ["0", "", false, null];
 
// testValues.forEach(value => {
//   console.log(`Value: ${JSON.stringify(value)}`);
//   console.log("== 0:", value == 0);
//   console.log("=== 0:", value === 0);
//   console.log("== false:", value == false);
//   console.log("=== false:", value === false);
//   console.log("---------------------");
// });
 
 
//Logical operators
// const hasDriversLicense = false; //A
// const hasGoodVision = false; // B
 
// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${hasDriversLicense}`);
 
// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);
 
// if (hasDriversLicense && hasGoodVision || !isTired) {
//   console.log("Adel is able to drive!");
// } else {
//   console.log("Oh no!Someone else should drive...");
// }
 
// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = true;
 
// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Yis galing!Approved to drive");
// } else {
//   console.log("Ngi! Not approved to drive");
// }
 
 
// Create a club entry system
// let age = 25;
// let hasID = true;
// let isVIP = false;
 
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Entry allowed. Welcome to the club!");
// } else {
//   console.log("Entry denied. You cannot enter.");
// }
 
 
// age = 25; hasID = true; isVIP = false;
// console.log("\nCase 1:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Entry allowed.");
// } else {
//   console.log("Entry denied.");
// }
 
 
// age = 19; hasID = true; isVIP = true;
// console.log("\nCase 2:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Entry allowed.");
// } else {
//   console.log("Entry denied.");
// }
 
 
// age = 19; hasID = false; isVIP = false;
// console.log("\nCase 3:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log(" Entry allowed.");
// } else {
//   console.log(" Entry denied.");
// }
 
 
// // The Conditional (Ternary) Operator
// const age = 78;
 
// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
 
// //if else statement
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);
 
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
 
 
 
////////////////////////////////////
// Coding Challenge #4
 
const bill = 430; // Test with 275, 40, and 430
 
// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300
 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 
// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
 
// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"