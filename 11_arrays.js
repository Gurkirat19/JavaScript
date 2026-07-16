const myArr = [0, 1, 2, 3, 4, 5]
// array can contain any value including strings, number, characters.
const myHeroes = ["shaktiman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);



// push - used in array to add new items 
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop - used to remove the items (removes the last item)
myArr.pop()
console.log(myArr);

// unshift - used to add items (add item in the front of arr)
myArr.unshift(8);
console.log(myArr);

// shift - used to remove the items (remove from the starting)
myArr.shift();
console.log(myArr);

// includes - check whether the arr has item or not 
console.log(myArr.includes(4));

// indexof - checks the desired value is present or not 
console.log(myArr.indexOf(19));

// .join - it creates and return new string in the arr
const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// .slice - extraxts the portion of an arr or string
//         (means using the range we can remove the part of it)
console.log("a", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

// .splice - it manipulates the array 
//           (also extracts the postion of an array and gives the items)
const myn2 = myArr.splice(1,3);
console.log(myn2); 


