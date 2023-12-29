//if

// if(condition){   => syntax
//     statements;
// }

//comparison operators => < , > , <= , >= , != , == , === , !==
let temperature = 41

if(temperature < 50){
    console.log("less than 50");
}
console.log("executed");

//if-else
/*
    if(condition){
        statements;
    }
    else
    {
        statements;
    }
*/

if(temperature == 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
console.log("Executed");


if(temperature == 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
console.log("Executed");

//Another example
const balance = 1000

if(balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

//Nesting
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User logged in");
}