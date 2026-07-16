let myDate = new Date()
// console.log(myDate.toString());
// here we have converted the date to the string so it can be read easily 


// console.log(myDate.toDateString());  // -> returns date in human readable format (only include date not timezone and time)
// console.log(myDate.toISOString());  //  -> Returns the date and time in the ISO 8601 standard format
// console.log(myDate.toJSON());               // -> Returns the same ISO format used in JSON serialization.
// console.log(myDate.toLocaleDateString());   // -> Returns the date formatted according to the user's locale (region).
// we can convert them into multiple things 


// console.log(typeof myDate);
// date is object


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());




// -------------------------------------X-------------------------------


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is ${}`

newDate.toLocaleString('default', {
    weekday : "long",
})


