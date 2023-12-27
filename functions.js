//Non-parametrized function
function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("M");
}
sayMyName()

//Parameterized function
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
addTwoNumbers(3,4)

//function which returns values
function addTwoNumbers1(number1,number2){
    let result = number1+number2
    return result
    //or we can directly write "return result1+result2"
}
const val = addTwoNumbers1(3,5)
console.log("Result : ",val);

function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged In`
}
let val1 = loginUserMessage("Soham") //Whenever we dont pass values to functions then the returned value becomes undefined
console.log(val1);
let val2 = loginUserMessage()
console.log(val2);