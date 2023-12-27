//Arrays
const myArr = [0,1,2,3,4,5,true,"soham"]  //arrays can contain any value, strings,booleans,other arrays and even objects
console.log(myArr);
console.log(myArr[2]);  //We can access single elements using indexes

//Another way to declare array
const myArr2 = new Array(1,2,3,4); //here we dont use square brackets
console.log(myArr2);
console.log(myArr2[2]); //We can access single elements using indexes

//Array methods
// 1) push():-
myArr.push(6)  //Appends new elements to the end of an array, and returns the new length of the array.
console.log(myArr);

//  2) pop() :-
myArr.pop()  //Removes the last element from an array and returns it.
console.log(myArr);

// 3) unshift():-
myArr.unshift("pal") //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr);

//4) shift() :-
myArr.shift() //Removes the first element from an array and returns it.
console.log(myArr);

// 5) includes()
console.log(myArr.includes(9)); //Determines whether an array includes a certain element, returning true or false as appropriate.

// 6) indexOf()
console.log(myArr.indexOf(9)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(myArr.indexOf('soham'));

// 7) join()
const val = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string. If nothing is mentioned the values are separated using a comma
console.log(myArr);
console.log(val);
console.log(typeof val);

// 8) slice(), splice()
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
/*Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.*/
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
/*Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.*/
console.log("C",myArr);
console.log(myn2);