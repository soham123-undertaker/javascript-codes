//These loops are specifically designed for iterable data structures such as arrays,objects,strings

//for-of loop
//on arrays
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
//on strings
const greetings = "Hello world"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

//Maps :- map stores unique values and remembers the order of keys
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")

console.log(map);

for (const key of map) {
    console.log(key); //This prints the whole map only
}

//we can solve this problem by the below syntax
//here we do map destructuring

for (const [key,values] of map) {
    console.log(key, ':-', values);
}

//on objects
const myObject = {
    'game1' : 'NFS',
    'game2' : 'PUBG'
}
/*objects cannot be iterated using for-of loop
for (const [key,value] of myObject) {
    console.log(key, ':-', value);
}
*/

//for-in loop
const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

//To iterate over objects we use for in loop
for (const key in myObj) {
    // console.log(key);
    //We can get the values by the following way
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//in arrays
const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key); //here we will get the index of the array..which is a problem
    console.log(programming[key]); // here we will get the values
}

//in maps
// for (const key in map) {
//     console.log(key);
// }
//maps cannot be iterated through for in loop.

//for-Each loop
const coding = ["js","ruby","java","python","CPP"]
//for-Each loop is the most widely used loop

coding.forEach( function (item){  //As it is a call back function, so it does not have any name
    //The for-Each loop goes through each item of array an assigns it to item, now we can do anything with it inside the function
    console.log(item);
} )

//Arrow function usinf for-Each loop
coding.forEach( (val)=>{
    console.log(val);
} )

//We can also use a standalone function inside for-Each

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //We just pass the reference to the function
//This also works the same way as the above two methods

//forEach loop also gets reference to the index of item and also the whole array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//iterating over array of objects
//it is very useful in databases
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "C++",
        languageFileName : "cs"
    }
]

//it is very easy to iterate over array of objects using for-Each loop
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
