// const person={
//   name:"Pawan",
//   age:22
// };
// console.log(person);
// // how to access data from objects
// .notation is used to access data from objects
// person.age=55;
// console.log(person.age);
// console.log(person.name);

// const person={
//   name:"Pawan",
//   age:22,
//   hobbies:["coding","reading"]
// }
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person["name"]);     // same as person.name
// how to add key value pair in objects
// person.gender="male";
// console.log(person);

// difference between dot and bracket notation
// const key="email";
// const person1={
//   name:"Pawan",
//   age:22,
//   "person hobbies":["coding","reading"]
// }
//console.log(person.person hobbies) // throws error
// console.log(person1["person hobbies"]);

// person1[key]="mynbi@example.com";
// console.log(person1);

// how to delete key value pair in objects
// delete person1.age;
// console.log(person1);

// how to check if key is present in objects
// console.log(person1.hasOwnProperty("name"));

// how to iterate over objects
// for in loop
// for(let key in person1){
//   console.log(`${key} : ${person1[key]}`);
// }

// Object.keys()
// console.log(Object.keys(person1));
// console.log(Array.isArray((Object.keys(person1))));

// for(let key1 of Object.keys(person1)){
//   console.log(`${key1} : ${person1[key1]}`);
// }

// Computed property names
const key1 = "email";
const key2 = "age";

const val1 = "mynbi@example.com";
const val2 = 23;
// const person2={
//   [key1]:val1,
//   [key2]:val2
// }

const person2 = {};
person2[key1] = val1;
person2[key2] = val2;
console.log(person2);

// spread operator

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const narray = [...array1, ...array2];
console.log(narray);
const newArray = [..."abcde"];
console.log(newArray);

// spread operator with objects
const obj1 = {
  key1: "value1",
  key2: "value2"
};
const obj2 = {
  key1: "value45",
  key3: "value1",
  key4: "value2",
};
const newObject={...obj1,...obj2};
console.log(newObject);

const newObj={..."abc"};
console.log(newObj);

// Object destructing
const band={
  bandName: "led zepplin",
  famousSong:"stairway to heaven",
  year:1968,
};
const {bandName,famousSong}=band;
console.log(bandName,famousSong);
