/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);*/

//Confusing comaprisons
console.log("2" > 1);
console.log("02" > 1);

//It is always recommended to do comparisons on same data type only

console.log(null > 0);  //The reason is that an equality check == and comparisons > < >= <= work differently
console.log(null == 0); //Comparisons convert null to a number, treating it as 0.
console.log(null >= 0); //That's why(3) null >=0 is true and (1) null > 0 is false

console.log(undefined == 0);  //In case of undefined it is also confusing but it always gives the value of false
console.log(undefined > 0);
console.log(undefined < 0);

// === => it checks the values strictly...i.e, it checks the value as well as data type
console.log("2" == 2)  //returns true
console.log("2" === 2); //returns false