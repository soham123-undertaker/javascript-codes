const user = {
    username : "Soham",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);  //this keyword is used to refer to current context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Dip"
user.welcomeMessage()

/*Note "this" keyword cannot be used inside functions 
    function chai(){
        let username = "soham"
        console.log(this.username);  -> this will print undefined
    }
    chai()
*/


//=============Arrow functions==============
//In arrow function we remove the keyword "function" and add a => after parenthesis()

//Explicit arrow function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4))

//Implicit arrow function... Here if the function is of 1 statement only then we weite it beside arrow and within parenthesid, with this method we dont have to write the "return keyword..i.e, if we use curly braces then we have write "return" and if the function is of 1 statement and we write it eithin parenthesis beside the arrow(=>) then we dont have towrite the "return" keyword

//Implicit arrow function
const addThree = (num1,num2,num3) => (num1+num2+num3)
console.log(addThree(5,6,7));

//Implicit function to return object
const addone = () => ({username : "Habu"})
console.log(addone());