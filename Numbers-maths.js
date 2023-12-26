//++++++++++++++++++ Numbers +++++++++++++++++++++++++++++++++++++++++++

const score = 400
console.log(score);
//In above case Javascript automatically detects the score variable to be a number

//We can also explicitly define a variable to be a number using the new operator as shown below
const balance = new Number(100);
console.log(balance);

//Number Methods
//1) :- toString() :- Converts the number into a string. Then we can use string methods also
console.log(balance.toString());
console.log(balance.toString().length);  //using string methods after converting the number into string

//2) toFixed(number upto which we want the number to be fixed) :- fixes the number upto a particular decimal
console.log(balance.toFixed(2));

// 3) toPrecision() :- Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3));

//4) toLOcaleString() :- Converts a number to a string by using the current or specified locale. In other words it assigns commas in the string according to the US standard.
const hundreds = 1000000
console.log(hundreds.toLocaleString()); 

//+++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));         //Returns the absolute value of a number (the value without regard to whether it is positive or negative).
console.log(Math.round(4.6));      //Returns a supplied numeric expression rounded to the nearest integer
console.log(Math.ceil(4.2));       //Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(4.9));      //Returns the greatest integer less than or equal to its numeric argument
console.log(Math.min(4,3,6,8));   //Returns the minimum value from an array
console.log(Math.max(4,3,6,8));   //Returns the maximum value from an array

console.log(Math.random());   //Returns a random number between 0 and 1