const name = "gurkirat"
const repocount = 12

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('gurkirat');

// console.log(gameName[0]);
// console.log(gameName[1]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "    gurkirat     "
console.log(newStringOne);
console.log(newStringOne.trim());

// const url = "https://google.com"

// console.log(url.replace('',''))
console.log(gameName.split('-'));
