//primitive
//7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference(Not primitive)
//Array, Objects, Functions

//Since we do not define the datatype of variables in Javascript hence it is known as dynamically typed Language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const ousideTemp = null
let userEmail;

const id = Symbol('123')         //here the data type is another data type which is called symbol
const anotherId = Symbol('123')  /*here we see the both the passed values are same. 
                                   It is the working of 'Symbol' that even if the passed values are same, 
                                   the returned valued are different*/
console.log(id === anotherId); // It returns false


const bigNumber = 1234543212343251646466n   //append n at last to make it a bigInt

//Arrays
const heroes = ["Superman","Batman","Shaktimaan"]

//Objects
//We can store the objet in a variable named myObj
let myObj = {
    name2 : "Soham",
    age : 21,
}

//Functions
/*
There are many ways to declare functions...now we will see the way to declare funnctions as variables
 */

const myFunction = function(){
    console.log("Hello World");
}

//typeof can be used to declare the type of data
console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof anotherId);