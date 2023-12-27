//We can pass multiple values to a function using Rest or spread operator
function calculateCartPrice(...num1){
    return num1  //returns an array with all the passed values
}
console.log(calculateCartPrice(200,400,500));

//Passing objects to functions
const user = {
    username : "Soham",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Compulsory an objectshould be passed

//Passing array to functions
const mynewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray));