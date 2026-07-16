// singleton - doesnt made from litrels
//           - it is made from the constructor
// Object.create - this constructor method (object made)

const mySym = Symbol("key1")

// object Literals
const User = {
    name: "Gurkirat",
    "myName" : "Gurkirat Singh",
    [mySym] : "myKey1",
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

