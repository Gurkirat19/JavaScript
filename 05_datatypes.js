//  Primitive DataTypes 
// String 
// Number
// Boolean
// null
// undefined
// Symbol
// BigInit

const score = 100
const scoreValue = 100.3
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23456313456734n




// Non-Primitive DataTypes
// Array
// Objects
// Function 

// 1.Array - 
const heroes = ["ironman", "spiderman", "batman"]

// 2.Objects -
let obj = {
    name: "gurkirat",
    age: 21,

}

// 3.Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof myFunction);
console.log(typeof Symbol);
