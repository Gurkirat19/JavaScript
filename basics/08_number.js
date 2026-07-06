const score = 400
console.log(score);
// here the value is number but can be changed to any datatype 


const balance = new Number (100)
console.log(balance);
// here we have specifically or strictly stated that it is a number so it cant be other datatype


console.log(balance.toString().length);
// here we have converted the number to string than find its length


console.log(balance.toFixed(2));
// here we have given the fixed place value . after decimal how much value should be given output


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
// depend whether the precison is taken before decimal or after 
// based on input value the precision takes place


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
// it will automatically assign commas to the hundreds (by default amercan style)
// so we have use en-IN to make it indian comma style to know
