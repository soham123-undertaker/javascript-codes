const name = "Soham"
const reposCount = 3

// console.log(name + reposCount + " Value");
//Above one is old way of writing strings and we dont use it now

//The new way os writing strings is using backticks
//It uses the concept of string interpolation, we place the value using dollar-and-within-square brackets
//The benefit of it is, we can do many things on the go, for e.g we can apply toUppercase function on name which
//was not possible using the  way of writing strings

console.log(`Hello my name is ${name} and my repo count is ${reposCount}`);

//Another way to declare strings using Objects
const gameName = new String("Soham-pal-com")  //The value will be same

//String is an object with key value pairs
/* for e.g :- for string Soham it is represented as below
    0 :- S
    1 :- o
    2 :- h
    3 :- a
    4 :- m
    */
console.log(gameName[0]);   

//String prototypes
//1) length prototype
console.log(gameName.length);
//2) toUppercase() :- converts the string to uppercase
console.log(gameName.toUpperCase());
//3 charAt() :- used to check the caharacter at a particular position
console.log(gameName.charAt(1));
//4) indexOf() :- reverse of charAt(), used to know the position of a particular character
console.log(gameName.indexOf('h'));
//5) substring() :- used to cut out a smaller substring from a particular string
const newString = gameName.substring(0,4)  //arguments are start index and end index. it cuts out a string including start index and excluding end index
console.log(newString);

//6) slice() :- It is similar to substring, but here we can give negative values, negative indexing starts in reverse direction
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// 7) trim() :- it trims the string by cutting the empty spaces
const newStringOne = "   Soham   "
console.log(newStringOne);
console.log(newStringOne.trim());

// 8) replace('character to replace','character to be replaced') :- it replaces a given character with another specific character
const url = "https://soham.com/soham%20pal"
console.log(url.replace('%20','-'))

// 9) includes() :- it checks whether the given string is included in the parent string or not
console.log(url.includes('soham'));
console.log(url.includes('sohampal'));

// 10) split(separator,limit) :- it converts the string into an array and each element is part of string contained within separators
console.log(gameName.split('-'));