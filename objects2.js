//Here we will discuss how to initialize objects using constructor

const tinderUser = new Object()  //It is singleton
//const tinderUser = {}  :- Another way to declare Object. It is non-singleton

//Now we add keys in the Object
tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//Nesting of Objects
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Soham",
            lastname : "Pal"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//We can also Combine Objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3 : "a", 4 : "b"}
//We use Object.assign() to merge Objects
const obj3 = Object.assign({},obj1,obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//Optionall we add {} to ensure correct merging

console.log(obj3);

//More efficient way to merge is given below is to use the spread operator
const obj4 = {...obj1,...obj2}
console.log(obj4);

//The values from Database comes in the form of Array of Objects
const users = [
    {
        id : 1,
        email : "123@chatgpt.com"
    },
    {
        id : 1,
        email : "123@chatgpt.com"
    },
    {
        id : 1,
        email : "123@chatgpt.com"
    }
]

//We can access it using the indexed object and dot operator for the particular element of that object
console.log(users[1].email)

//Object.keys(Object_name) is used to get all the keys of the particular object in Array form
console.log(Object.keys(tinderUser))  //Returns an array of keys

//Same way Object.values(Object_name) is used to get all the values of a particular Object in Array form
console.log(Object.values(tinderUser))  //Returns an array os values

//Object.entries(Object_name) returns an array of array of each key value pairs
console.log(Object.entries(tinderUser))