const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]

//The wrong way of merging arrays is to use the push function. It takes the whole array as input and creates an array with another array

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

//The correct way of merging two arrays is to use the concat() method
let newArr = marvel_heroes.concat(dc_heroes) //Combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(newArr);

//Another way of merging arrays is to use the spread opearator
const all_new_heroes = [...marvel_heroes,...dc_heroes]  //With this, it becomes easier to merge any number of arrays
console.log(all_new_heroes);


// flat() method :- Another method to convert heavily nested arrays to a single array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity); //returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. A simple hack is to use "Infinity" in the argument or else we can also use the sprcific depth
console.log(real_another_array);

//Array.isArray() :- another method to check whether a given input is an array or not
console.log(Array.isArray("Soham"));

//Array.from() :- Another method which is used to convert another data type into array
console.log(Array.from("Soham"));  //Creates an array from an iterable object.
console.log(Array.from({name:"Soham"}))  //interesting

//Array.of() :- Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));