console.log(Math.abs(-8));
// .abs(absolute) - it used to convert the negative value to positive value
// but cannot chnage positive value beacuse positive remain positive 


console.log(Math.round(4.5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
// .round - will automaticaly change the number to its nearest number 
// .ceil - if this is use it will always choose the highest nearest number
// .floor - this is will always choose the lower nearest value 


console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
// .min - will tell the lowest value in the array
// .max - will give the highest value in the array


console.log(Math.random());
// .random - always gives values between 0 and 1 

console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
// here to overcome the problem of giving values 
// in 0 we have just added 1 at last so it would 
// not give the values in the 0 format (0.13, 0.22, 0.99) like this
// and also we have used the floor option so if the value appeared it chooses loweset nearest number


console.log(Math.floor(Math.random() * (max - min + 1)) + min)

