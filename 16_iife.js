// IIFE (Immediately Invoked Function Expression) -
// It is a function that is defined and executed immediately after it is created.


// function chai(){
//     onsole.log(`DB connected`);
// }
// chai()
// this is a normal function


(function chai(){                   // => this is also called as named IIFE
    console.log(`DB connected`);
})();
// due to the present of extra value in the global scope we use iife to avoid the pollution (extra values) of the global scope and to keep the code clean and organized.

( (name) => {
    console.log(`DBconnected two ${name}`);
})('MongoDB');




