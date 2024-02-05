const myNums = [1,2,3]

//In reduce we use callback with 2 parameters...'accumulator' and 'currentvalue'. At first the value of the 'accumulator' becomes the value that we have passed and after that the value of 'acccumulator' becomes the function expression.Here the addition becomes the value of the accumulator and the 'currentvalue' is the current value of the array.
// Note that reduce function operates on the whole array and the initial value os 'accumulator is passed after the callback function and within reduce
const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc:${acc} and currentval:${currval}`);
    return acc + currval
},0)

console.log(myTotal);

//Now lets see the use of arrow function in reduce
const myval = myNums.reduce( (acc,curr)=>acc+curr,3)
console.log(myval);

//Now lets see another example
const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=> (acc + item.price),0)
console.log(priceToPay);