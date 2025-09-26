'use strict';

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl (a, b) {
//     return a + b;
// }

// const addExpr = function (a, b){
//     return a + b
// }

// const addArrow = (a, b) => a + b;

// const person = {
//     name: 'Adel',
//     greet: function () {
//         console.log(`Hello I am ${this.name}`);

//     },
// };

// person.greet() ;

// const anotherPerson = { name: 'Angel'};

// //Borrow greet function
// anotherPerson.greet = person.greet;

// //display or run the greet function for anotherPerson
// anotherPerson.greet();

// //detached function
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//     name: 'Objects',
//     regularMethod: function () {
//         console.log('Regular:', this.name);
//     },
//     arrowMethod: () => {
//         console.log('Arr0w:', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//         console.log(`${this.name} finished modern`);
//     }, 1500);
//   }
// };

// timer.start();

// timer.startModern();

// const functionTypes = {
//     regularFunction: function () {
//         console.log('Arguments length: ', arguments.length);
//         console.log('First argument:', arguments[0]);

//     },

//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');

//     },

//     modernFunction: (...args) =>{
//         console.log('Args length', args.length);
//         console.log('First args', args[0]);
//     },
// };

// // functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');

// let age = 30;
// let oldage = age;

// age = 31;
// console.log('age', age);
// console.log('oldage', age);

// const me = {name: 'Adel', age: 20 };

// const friend = me;

// friend.name = 'Zoe';
// friend.age = 21;

// console.log('me:', me);
// console.log('friend:', friend);

// const original = {
//     name: 'Adel',
//     age: 20,
//     hobbies: ['dancing', 'singing'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Angel';

// console.log('original name:', original.name);
// console.log('copy name:', shallowCopy.name);

// shallowCopy.hobbies.push('singing');
// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

const deepOriginal = {
  name: 'Adel',
  age: 20,
  address: { city: 'Tokyo', country: 'Japan' },
  hobbies: ['performing', 'traveling'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Saitama';
deepCopy.hobbies.push('singing');
deepCopy.name = 'Gil';

console.log(deepOriginal);
console.log(deepCopy);

//end