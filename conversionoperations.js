let score = "33"
let score1 = "33ABC"
let score2 = null;
let score3 = undefined;

console.log(typeof score);
console.log(typeof (score1));  //Another way to declare typeof
console.log(typeof (score2));  //Another way to declare typeof
console.log(typeof (score3));  

let valueInNumber = Number(score)  //conversion of score which is string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber2 = Number(score1)
console.log(typeof valueInNumber2);  
console.log(valueInNumber2);     //number with letters is converted to NaN

let valueInNumber3 = Number(score2)
console.log(typeof valueInNumber3); 
console.log(valueInNumber3);  //null when converted to number becomes 0

let valueInNumber4 = Number(score3)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);  //undefined also gets converted to NaN

/*In case o Boolean values...'true' gets converted to 1 and 'false' gets converted to 0*/

/*Notes (value=> ConvertedValue)
"33" => 33
"33ABC" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

//Conversion to Boolean
let isLoggedIn = 1
let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn);

let isLoggedIn1 = ""
let booleanIsLoggesIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggesIn1);

let isLoggedIn2 = "Soham"
let booleanIsLoggesIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggesIn2);

/*Notes :-
1 => true
0 => false
"" => false
"Soham" => true
*/

//Conversion to String
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);