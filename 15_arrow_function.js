const user = {
    username: "gurkirat",
    price:999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to wesbsite`);
         // this => refers to the object which is calling the function, in this case it is user object
        console.log(this);
    }          
    
}
// user.welcomeMessage()
// user.username = "sammy";
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "gurkirat"
//     // console.log(this);
//     console.log(this.username); // this will give undefined output   
// }
// chai()


const chai = () => {
    let username = "gurkirat"
    console.log(this.username);    
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(12, 11));

// const addTwo = (num1, num2) => num1 + num2
// here if we have only one line of code in the function then we can remove the return statement and the curly braces and it will return the value automatically
// console.log(addTwo(12, 11));

const addTwo = (num1, num2) => ({username: "gurkirat"})
// if we have to return an object from an arrow function then we have to wrap the object in parentheses otherwise it will give error
console.log(addTwo(12, 11));
