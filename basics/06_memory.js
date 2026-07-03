// Memories are of two types -
// 1. Stack - (used for primitive type)(here the copied value is given to us onec it is assigned.)
// 2. Heap - (used for non-primitive type)(here the reference value the original value is assigned.)


let learning = "javascript"

let playing = learning
playing = "cricket"

console.log(learning);
console.log(playing);

let user1 = {
    email: "user1@gmail.com",
    id: "1"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);

// 1. here the value of user1 will be saved in the heap memory than when 
// user2 is called it will use user1 memory as reference fro user 2 so 
// it will call value of user1 to user2.

// 2. so if we change any value in any of the user the reference value will 
// also change and will be shown that value.


