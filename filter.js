const coding = ["js","ruby","java","python","cpp"]

//for each loop dont return anything
const values = coding.forEach( (item)=>{
    console.log(item);
    return item
})

console.log(values);

//forEach doesn't return any value...so for that we have filter 
const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter also takes callback as parameter

/*Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.*/

//Inside filter we will have a callback function where each values will be accessed and after that we have to provide a condition.The values which satisfies the condition will be returned.
const newNums = myNums.filter( (num)=> num > 4)
console.log(newNums);

//Let rewind a discussion. If the condition is within parentheses then the values will be returned automatically.
//But if we write the condition inside curly braces i.e if we define a scope then we have to write the return keyword

//this doesnot return anything. We have to write the return keyword explicitly if we have started a scope
const newNums1 = myNums.filter( (item)=>{
    item>4
})
console.log(newNums1);

//Now this returns
const newNums2 = myNums.filter( (item)=>{
   return item>4
})
console.log(newNums2);

//Now lets see how we can do the same thing  in forEach

const NEWNUMS = []

myNums.forEach( (num)=> {
    if(num > 4)
    {
        NEWNUMS.push(num)
    }
})
console.log(NEWNUMS);


const books = [
    {title: 'Book One', genre: 'Fiction' , publish: 1981,
    edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction' , publish: 1992,
    edition: 2008},
    {title: 'Book Three', genre: 'History' , publish: 1999,
    edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction' , publish: 1989,
    edition: 2010},
    {title: 'Book Five', genre: 'Science' , publish: 2009,
    edition: 2014},
    {title: 'Book Six', genre: 'Fiction' , publish: 1987,
    edition: 2010},
    {title: 'Book Seven', genre: 'History' , publish: 1986,
    edition: 1996},
    {title: 'Book Eight', genre: 'Science' , publish: 2011,
    edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction' , publish: 1981,
    edition: 1989},
]

let userBooks = books.filter( (bk)=> bk.genre === 'History')
userBooks = books.filter( (bk)=> {
    return bk.publish>= 2000})

console.log(userBooks);