// singleton - doesnt made from litrels
//           - it is made from the constructor
// Object.create - this constructor method (object made)

const mySym = Symbol("key1")

// object Literals
const User = {
    name: "Gurkirat",
    "myName" : "Gurkirat Singh",
    [mySym] : "myKey1",          // -> if we have to make the symbol then we will make this type of the notations
    age: 18,
    location: "Pune",
    email: "gurkiart@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(User.location) - this is also another option to see value (here it has limitation to extract value)

console.log(User["email"])
console.log(User["myName"])
console.log(User[mySym])
// but this is the best option to see the values

User.email = "gurkirat19@user.com"
// this is used to chnage the values 

// Object.freeze(User)
// .freeze -> if this is use then we cannot chnage the values in the object later


User.greeting = function(){
    console.log("hello js user");
}


User.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); 
}
// this -> when we have to take or give reference from the same object we use this.

console.log(User.greeting());
console.log(User.greeting2());