//The concept of map is similar to filter but here we dont write operation instead we write operation
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map( (num)=> (num+10))
console.log(newNumbers);

//if we define scope then we should write return otherwise it will return empty array
const newNums1 = myNumbers.map( (num)=> {return num+10})
console.log(newNums1);

//chaining- we can chain maps

const newNums = myNumbers.map((num)=> num*10).map( (num)=> num+1)
//The values will be passed from left to right..i.e, the values that are generated from first num are passed to the second num and so on
console.log(newNums);

//we can add filter also on our chaining
const newval = myNumbers
                .map( (num)=> num*10)
                .map( (num)=> num+1)
                .filter( (num)=> num>=40)

console.log(newval);