//async function:-It is a keyword used infront of function to create a async function.
//Async function always returns a promise. Inside the async function we can either return a promise directly or if we don't return a promise..i.e we return a string,numeric value,float etc..then this function will wrap this value inside a promise and will return that promise.


async function getData(){
    return "Namaste";
}

const data = getData();
console.log(data);