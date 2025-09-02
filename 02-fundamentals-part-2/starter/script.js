// console.log("Part 2 functions is ready");


// //Functions - Declarations and Expressions
// function logger() {
//     console.log("My name is Adel");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(11, 50));



// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);


// //Function Expression
// const calAge = function (birthYear) {
//     return 2025 - birthYear;
// };


// const age1 = calAge (2005); 
// console.log(age1);

// console.log(calAge(2005)); 


// function introduce(firstName, lastName, age){
//     const introduction = `Hi! I'm ${firstName} ${lastName} and I'm ${age} years old! `;
//     return introduction; 
// }

// console.log(introduce("Adel", "Oligo", 20));
// console.log(introduce("May")); 

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calAge(birthYear);
//     const retirement = 65 - age; 

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`
//     }else {
//         return `${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2005, "Adel")); 


// ///function scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// //console.log(localVar);





// function calcAverage(score1, score2, score3) {
//  return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//  if (avgDolphins >= 2 * avgKoalas) {
//    return `Dolphins win! (${avgDolphins} vs. ${avgKoalas})`;
//  } else if (avgKoalas >= 2 * avgDolphins) {
//    return `Koalas win!  (${avgKoalas} vs. ${avgDolphins})`;
//  } else {
//    return `No team wins:( (${avgDolphins} vs. ${avgKoalas})`;
//  }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// //Arrays Hayss
// const grades = [85, 92, 78, 96, 88];
// console.log(grades);


// const friends = ["Zoe", "Jhay", "Seb"];
// console.log(friends);

// const mixed = ["Glai", 27, true, friends];
// console.log(mixed);

// const years = new Array(2005, 2006, 2004, 2006);
// console.log(years);


// //Accessing Array Elements
// console.log(friends[0]); 
// console.log(friends[1]); 
// console.log(friends[2]); 

// //Access the length
// console.log(friends.length);

// friends[2] = "Jel";
// console.log(friends); 

// const calAge = function(birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calAge(2000), calAge(1991), calAge(1998) ];
// console.log(ages);


// //Array Methods
// const newLength = friends.push("Adel");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Angel");
// console.log(friends); 

// const popped = friends.pop();
// console.log(popped);
// console.log(friends); 


// //Remove first item in the list
// const shifted = friends.shift();
// console.log(shifted); 
// console.log(friends);



// //finding an element
// console.log(friends.indexOf("Jel"));
// console.log(friends.indexOf("Zoe"));

// //Includes
// console.log(friends.includes("Jel"));
// console.log(friends.includes("Steven"));

// //Array Iterations

// //Traditional FOr loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }


// //One way to create for each
// friends.forEach(
//     function(friend, index){
//         console.log(`${index + 1}: ${friend}: `);
//     }
// )

// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });



// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);



// Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades) {
//  let sum = 0;
//  for (let i = 0; i < grades.length; i++) {
//    sum += grades[i];
//  }
//  return sum / grades.length;
// }


// function findHighestGrade(grades) {
//  let highest = grades[0];
//  for (let i = 1; i < grades.length; i++) {
//    if (grades[i] > highest) {
//      highest = grades[i];
//    }
//  }
//  return highest;
// }


// function findLowestGrade(grades) {
//  let lowest = grades[0];
//  for (let i = 1; i < grades.length; i++) {
//    if (grades[i] < lowest) {
//      lowest = grades[i];
//    }
//  }
//  return lowest;
// }


// function countPassing(grades, passingGrade) {
//  let count = 0;
//  for (let i = 0; i < grades.length; i++) {
//    if (grades[i] >= passingGrade) {
//      count++;
//    }
//  }
//  return count;
// }


// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);



///  HOUR 3

//Problems with Arrays

// const adelArray = [
//   "Angel",
//   "Oligo",
//   2025 - 2005,
//   "student",
//   ["Adel", "Aj", "May"],
// ]; 

// console.log(adelArray[0]);
// console.log(adelArray[1]);

// const adelObject = {
//   firstName: "Angel",
//   lastName: "Oligo",
//   age: 2025 - 2005,
//   job: "student",
//   friends: ["Adel", "Aj", "May"],
// };

// console.log(adelObject);


// //Property Access

// //Dot Notation
// console.log(adelObject.firstName);
// console.log(adelObject.lastName);
// console.log(adelObject.age);

// //Bracket Notation
// console.log(adelObject["firstName"]); 
// console.log(adelObject["lastName"]); 
// console.log(adelObject["age"]); 

// const nameKey = "Name";
// console.log(adelObject["first" + nameKey]);

// //Modifying Existing Properties 
// adelObject.job = "Graphic Designer";
// adelObject["age"] = 18;
// console.log(adelObject);

// //Add New Properties
// adelObject.location = "Pangasinan";
// adelObject["instagram"] = ["hr.adel_"];
// adelObject.hasDriverLicense = true;
// console.log(adelObject);


// //Objects vs Arrays Decision Making

// //Arrays
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//   name: "Hera",
//   age: 20,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Mercedes",
//   model: "Camry",
//   year: 2025,
//   color: "white",
// };


// //objects can contain arrays and arrays can contain objects
// const student = {
//   name: "Lisa",
//   grades: [85, 92, 78], 
//   address: {
    
//     street: "123 Main St",
//     city: "Mai Mi Tangka",
//   },
// };

// console.log(student.grades[0]); // 85
// console.log(student.address.city); // 'New York'


// //Object Methods
// const magnus = {
//   firstName: "Magnus",
//   lastName: "Oligo",
//   birthYear: 2018,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };


// console.log(magnus.calcAge(1991));
// console.log(magnus.calcAge(magnus.birthYear));


// //"this" keyword
// const magnusImproved = {
//   firstName: "Magnus",
//   lastName: "Oligo",
//   birthYear: 2018,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); 
//     return 2025 - this.birthYear; 
//   },
// };

// console.log(magnusImproved.calcAge());


// //Complex object with multiple methods
// const bankAccount = {
//   owner: "Adel Hera",
//   movements: [200, 290 -400, 500, 400, 1000, 3000, -100], 
//   interestRate: 1.2,
//   pin: 111,

//   //Method to calculate balance
//   calcBalance: function(){
//     this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//     return this.balance;
//   },

//   //Method to add movement
//   deposit: function (amount) {
//     this.movements.push(amount);
//     this.calcBalance();
//   },

//   withdraw: function (amount) {
//     this.movements.push(-amount);
//     this.calcBalance();
//   },
// //method for account summary
// getStatement: function () {
//   return `${this.owner}'s account balance: ${this.balance}`;
// },
// };

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());



// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Angel",
//   lastName: "Oligo",
//   birthYear: 2005,
//   location: "Pangasinan",
//   interests: ["playing instrument", "travel", "dancing"],
//   friends: [
//     { name: "Zoe", status: "active" },
//     { name: "Jhay", status: "inactive" },
//     { name: "Glai", status: "active" },
//   ],
//   isActive: true,

  
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

  
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

  
//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

  
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

  
//   getSummary: function () {
//     const age = this.calcAge();
//     const activeFriends = this.getActiveFriends();
//     const totalFriends = this.friends.length;
//     const status = this.isActive ? "Active" : "Inactive";

//     return `
// Name: ${this.firstName} ${this.lastName}
// Age: ${age}
// Location: ${this.location}
// Status: ${status}
// Friends: ${totalFriends} total (${activeFriends} active)
// Interests: ${this.interests.join(", ")}
//     `;
//   },
// };


// console.log(user.getSummary());
// user.addFriend("Adel", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());



/// querySelector - uses css selectors

// const message = document.querySelector(".message");
// // gets us the entire element object with all its properties
// console.log(message); 

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);

// //query selector returns the first matching element
// console.log(message.textContext);   
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContext);

// //GetElementById 
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID); 
// console.log(buttonByID === button);

// //querySelectorAll - multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); 
// console.log(allParagraphs[0]); 



// // Modifying an Element Content
// const message = document.querySelector(".message");

// //Text Content
// console.log(message.textContent);
// message.textContent - "Hello From Javascript!";
// console.log(message.textContent);

// //InnerHTML
// message.innerHTML = "<strong>Hello From Javascript!</strong>";

// //InnerText
// console.log(message.innerText);

// //Input Element Valies
// const input = document.querySelector(".guess");
// console.log(input.value);
// input.value = "Default Text";

// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "black";
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.borderRadius = "10px";


// // Event Listners - user interactions
// button.addEventListener('click', function() {
//   console.log("Button Clicked");
//   message.textContent = "You Clicked the Button!";
//   message.style.color = "blue";
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// }); 


// //Input events
// const display = document.querySelector(".message");
// input.addEventListener("input", function () {
//   const userText = input.value;
//   display.textContent = `You typed: ${userText}`;
//   display.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     display.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; 
//   }
// });







