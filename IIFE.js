//Immediately Invoked Function Expression (IIFE)
//This is a type of function which in invoked immediately after it is written
//It is useful in applications where we want the application to immediately connect to the database as soon as it is run

//It uses 2 set of parentheses. Inside one parentheses we write the function and the 2nd parentheses is for execution

//Sometimes there is pollution from global scopes, to remove that we use IIFE

(function chai(){
    console.log(`DB connected`);
})();  //Always use a semicolon while using IIFE

//Writing IIFE using arrow function
(() => {
    console.log(`DB connected 2`);
})();

//passing parameters
((name) => {
    console.log(`DB connected 2 ${name}`);
})('habu');