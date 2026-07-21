const userEmail = "gs@gmail.com"

if (userEmail) {                           // truthy value - here we have assumed that the value is true 
    console.log("got user email");
} else{
    console.log("dont have user email");
}


// truthy values - these are the values which are considered as true in javascript
// 1. true
// 2. any number other than 0   
// 3. "0" - values in string are truthy values if it is false as well
// 4. " ", [ ], { }, function(){}


// falsy values - these are the values which are considered as false in javascript
// 1. false
// 2. 0
// 3. ""
// 4. null 
// 5. undefined
// 6. NaN   
// 7. BigInt


// if (userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){      // using these we can check whether the the object is empty or not 
    console.log("object is empty");
}




// Nullish Coalescing Operator (??) => all the work is related on the null and undefined 

let val;
// val1 = 5 ?? 10
// val1 = null ?? 10 
var2 = undefined ?? 15
val2 = null ?? 10 ?? 20
console.log(val1);




// Ternary Operator () - 
// used to check wether the condition is true or false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
