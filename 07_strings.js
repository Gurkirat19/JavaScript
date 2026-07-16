const name = "gurkirat"
const repocount = 12

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('gurkirat');   // -> this is tring object

// console.log(gameName[0]);  - here we have given index value and will print value
// console.log(gameName[1]);  -

// console.log(gameName.__proto__);

// console.log(gameName.length);    -> will give length of the string object
// console.log(gameName.toLocaleUpperCase());   // -> converts the lower to upper case
console.log(gameName.charAt(2));               // -> it also takes index vale and gives the variable 
console.log(gameName.indexOf('k'));           // -> taking the variables and gives the index value 

const newString = gameName.substring(0, 4)   // -> will give the values starting from the first index to the -index value
console.log(newString);                      // -> 1.Includes the start index., 2.Excludes the end index.


const anotherString = gameName.slice(0, 4)   // -> 1.Includes the start index., 2.Excludes the end index., 3.Supports negative indexes.
console.log(anotherString);

const newStringOne = "    gurkirat     "
console.log(newStringOne);
console.log(newStringOne.trim());
// .trim -> is used to remove the extra spaces in the string


// const url = "https://google.com"
// console.log(url.replace('',''))


console.log(gameName.split('-'));
// .split - converts the string into and array
