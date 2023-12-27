//There are 2 ways to declare objects...one way is by literals and another way is by constructors

//If we declare objects in the form of literals then there is no singleton, but it is singleton if it is declared by constructor

//Object Literals : A way to declare Objects
const mySym = Symbol("Key1")

const Jsuser = {
    name : "Soham",
    [mySym] : "mykey1", //to use symbol as key we write eithin brackets, otherwise it will be treated as string
    age : 21,
    location : "Barddhaman",
    email : "spalgmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
console.log(Jsuser);

//Accessing elements of an Object
// 1 way is by using the "." (dot) operator
console.log(Jsuser.email)
// 2nd way is by using square brackets with the key written within quotes...as internally JS treats key as strings
console.log(Jsuser["email"]);

Jsuser.email = "spal56@gmail.com"  //way to change values
//We can also freeze a value for a particular key, so that other person cannot change the value
Object.freeze(Jsuser)
Jsuser.email = "spalchatgpt@gmail.com"
console.log(Jsuser.email)