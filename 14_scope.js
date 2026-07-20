{} // scope is nothing just the curlybraces which is used in functions, objects, etc in javascript

// let a = 300   // ===> this is global scope 
// if (true) {
//     let a = 10
//     const b = 20                     // ===> this are local scope values doesn't affect the global scope values
//     console.log("inner : ",a);
// }
// console.log(a)


function one(){
    const username = "gurkirat"  

    function two(){
        const website = "youtube"
        console.log(username);  // ===> this is called lexical scope, here the inner function can access the outer function values but not vice versa
    }
    // console.log(website);  // ===> this will give error because the outer function cannot access the inner function values
    two()
}
one()


if(true) {
    const username = "gurkirat"
    if(username === "gurkirat") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);  // ===> this will give error because the outer function cannot access the inner function values
}
// console.log(username);  // ===> this will give error because the outer function cannot access the inner function values 



console.log(addone(5));
function addone(num){
    return num + 1
}
addone(5)

console.log(addtwo(5)); 
const addtwo = function(num){        // ==> this is called function expression, here the function is assigned to a variable and it cannot be called before the function is defined
    return num + 2
}
addtwo(5)
 