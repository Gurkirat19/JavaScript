const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
// .push() -> method is used to add one or more elements to the end of an array.
// here it will merge the arrays but it will convert the
// second array into the 4th element in the first arr although it is a array.


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);
// .concat - Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const allHeroes1 = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes1);
// this is called spread out values 
// here we use ... so that they give me individual values


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);
// .flat - if we have to concat the multiple arrays merged in one so we use flat function
//         to separate them singly and tell how much depth is there or use infinity instead of it  


console.log(Array.isArray("Gurkirat"));
// .isArray - this is used to check whether it is array or not 


console.log(Array.from("Gurkirat"))
// .from - this is used to convert any type of datatypes into the array


console.log(Array.from({name: "gurkirat"}));
//  this will give the empty array so we have to define which values should be convert into arry keys or values


console.log(Array.of(score1, score2, score3));
// .of - Returns a new array from a set of elements.
