const { use } = require("react");

function sayMyName(){
    console.log("G");
    console.log("U");
    console.log("R");
    console.log("K");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("T");
}

sayMyName()
// if i would have written only name of variable then it is only reference 
// to call the function i have to also add brackets to it so it will run


// function addTwoNumbers(number1, number2){    // -> number1,2 these are the parameters
//     console.log(number1 + number2);
// }        
addTwoNumbers(3, 4) // -> these are the arguments

// isntead we will use this function

function addTwoNumbers(number1, number2){
    //  let result(number1 + number2);
    //  return result  // if we have add console.log or any variable after return it will not execute 

    //  or

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result : ", result);
// after implementing it will tll te value of result is undefined
// It is because the function prints the sum but does not return it.


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("gurkirat"));
// console.log(loginUserMessage()); -> her when no values is assigned then it gives the output undefined


function calculateCartPrice(val1, val2, ...number1){
    // here ... -> this act as a rest operator (it gives output in the from of array)
    // here if we put the val1 and val2, it will store in the desired values and the rest values is stored in the array
    return number1
}

// console.log(calculateCartPrice(200, 400, 500))


// this is how we pass objects in function
const user = {
    username: "gurkirat",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray = [200, 500, 700, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 500, 700, 1000]));

