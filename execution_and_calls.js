// JavaScriptExecution Context

// in browser the value of this is the (window) object and in nodejs the value of this is the global object


// Javascript is single threaded and synchronous language. It means that it can do one thing at a time and in order. It is also called as blocking language because it will block the execution of the next line of code until the current line of code is executed completely.


// Execution context - 
// 1. Global Execution Context (GEC) - It is the default execution context in which the code is executed. It is created when the code is executed for the first time. It is created in two phases - Creation phase and Execution phase. In creation phase, the global object and this keyword are created and in execution phase, the code is executed line by line.

// 2. Function Execution Context (FEC) - It is created when a function is called. It is created in two phases - Creation phase and Execution phase. In creation phase, the arguments object and this keyword are created and in execution phase, the code is executed line by line.

// 3. Eval Execution Context (EEC) - It is created when the eval() function is called. It is created in two phases - Creation phase and Execution phase. In creation phase, the arguments object and this keyword are created and in execution phase, the code is executed line by line.


//  |------------|                                                                                                  |--------------------| 
//  |{           |                                                                                                  |{ new variable      | 
//  | Javascript |   ====>          Memory Creation Phase:-         ====>         Execution Phase:           ====>  |  environment }     |  
//  |    code    |         - here varibales, datatypes are stored          here the code is executed line by        |       +            |
//  |           }|           in the memory along with their value.         line and the values of the variables     | {execution Thread} |
//  |------------|                                                              are updated in the memory.          |--------------------|
                 

// let val1 = 10
// let val2 = 2
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result = addNum(val1, val2);
// let result2 = addNum(20, 40);

// let see how code works :-
// 1. Global Execution Context is created and the code is executed line by line.    


//                   ||
//                   ||
//                   \/


// 2. Memory Creation Phase:-
//  - val1 = 10
//  - val2 = 2
//  - addNum = function addNum(num1, num2){...}
//  - result = undefined
//  - result2 = undefined


//                   ||
//                   ||
//                   \/


// 3. Execution Phase:-
//  - val1 = 10
//  - val2 = 2
//  - addNum = function addNum(num1, num2){...}
//  - result = addNum(val1, val2) => addNum(10, 2) => total = 12 => return total => result = 12
//  - result2 = addNum(20, 40) => total = 60 => return total => result2 = 60


//                   ||
//                   ||
//                   \/


// 4. Function Execution Context is created when the function is called and the code is executed line by line.


//                   ||
//                   ||
//                   \/

// 5. Memory Creation Phase:-
//  - num1 = 10
//  - num2 = 2
//  - total = undefined


//                   ||
//                   ||
//                   \/


// 6. Execution Phase:-
//  - num1 = 10
//  - num2 = 2
//  - total = num1 + num2 => total = 12
//  - return total => result = 12


//                   ||
//                   ||
//                   \/


// 7. Function Execution Context is created when the function is called and the code is executed line by line.


//                   ||
//                   ||
//                   \/


// 8. Memory Creation Phase:-
//  - num1 = 20
//  - num2 = 40
//  - total = undefined


//                   ||
//                   ||
//                   \/


// 9. Execution Phase:-
//  - num1 = 20
//  - num2 = 40
//  - total = num1 + num2 => total = 60
//  - return total => result2 = 60


//                   ||
//                   ||
//                   \/


// 10. Global Execution Context is destroyed when the code is executed completely and the memory is freed.


