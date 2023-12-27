//Dates
let myDate = new Date()  //Initializing date object


//Date Methods
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.getDate());  //Gets the day-of-the-month, using local time.
console.log(myDate.getDay());   //Gets the day of the week, using local time.
console.log(myDate.getFullYear()); //Gets the year, using local time.
console.log(myDate.getHours());  //Gets the hours in a date, using local time
console.log(myDate.getMonth());   //Gets the month, using local time.

console.log(myDate.toDateString());  //Returns a date as a string value
console.log(myDate.toISOString());  //Returns a date as a string value in ISO format
console.log(myDate.toJSON());  //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
console.log(myDate.toLocaleString());
console.log(myDate.toString());  //Returns a string representation of a date

//We can also declare a specific date also
let myCreatedDate = new Date("01-14-2023") 
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()   //We can initializa date using Date.now also..It gives current date in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
//using this method we can compare time

//We can get the time in seconds also by diving it with 1000. But it may give time in decimal, so we wrap the time in Math.floor()
console.log(Math.floor(Date.now()/1000));