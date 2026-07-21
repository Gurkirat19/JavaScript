// * if and else statement -

// 1. const isUserLoggedIn = true
// if ( 2 == "2" ){
//     console.log("executed");
// }


// 2. const temperature = 70;
// if (temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }


// 3. const score = 200
// if(score > 100 ){
//     const power = "batman"
//     console.log(power);
// }


// 4. const balance = 2000;
// if (balance > 500){
//     console.log("you can buy this item");
// } else {
//     console.log("you cannot buy this item");
// }




// * Nested loops - 
// 1. if else statement inside another if else statement

// const balance = 1000;
// if(balance < 500){
//     console.log("less than ");
// } else if (balance < 750){
//     console.log("less than 750");
// } else {
//     console.log("greater than 1200");
// }


// const userloggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromFacebook = false;

// if (userloggedIn && debitCard){
//     console.log("allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromFacebook){  // here || means OR operator either one of the condition should be true 
//     console.log("user logged in ");
// }




// * Switch statement - 
// we can use switch statement when we have multiple conditions to check

// switch (key){
//     case value:
// 
//         break;
// 
//     default:
//         break;
// }


const month = 3                 // here if the value is string then we have to convert the case value to string otherwise it will not work because switch statement is strict comparison operator
switch (month){                 
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case executed");
        break;      
}






