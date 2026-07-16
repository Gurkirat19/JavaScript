// const vickyUser = new Object() 
// this is a singleton object 

const vickyUser = {}
// this is object (original)

vickyUser.id = "123abc" 
vickyUser.name = "gurkirat"
vickyUser.isloggedIn = "True"

const regularUser = {                 // -> here we have done the nested object(object under object)
    email: "example@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gurkirat",
            lastname: "singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// after compiling we will get object under object 

// const obj4 = Object.assign({}, obj1, obj2)    // [{} - it act as a target] and [obj1,2 - act as a source]
// .assign -> static method copies all enumerable own 
//            properties from one or more source objects 
//            to a target object and returns the modified target object.


const obj4 = {...obj1, ...obj2}  // most preferrable method to add an object and array
// ...(spread operator) - it will seperate all the arrays and will merge the object and array to give answer
console.log(obj4);




const users = [
    {
        id: 1,
        email: "hot@mail.com" 
    },

    {
        id: 2,
        email: "hot@gmail.com" 
    },

    {
        id: 3,
        email: "hot@microsoft.com" 
    },

    {
        id: 4,
        email: "hot@google.com" 
    }
]

users[1].email
// here we have selected the first use in the array

console.log(vickyUser);

console.log(Object.keys(vickyUser));
console.log(Object.values(vickyUser));
console.log(Object.entries(vickyUser));
console.log(vickyUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
// console.log(instructor);
// here we have simply made the calling variables easy
// early we use to write course.courseinstructor but we have created it easily 
 

