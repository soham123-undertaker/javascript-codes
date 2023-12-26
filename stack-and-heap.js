//There are two types of memory available
//1) stack memory
//2)Heap memory

//stack is used to store primitive data types
// whereas Heap is used to store non-primitive data types


//In primitive types the variable receives a copy of the value, so whenever any change happend is one 
//it is not reflected in another

let myYotubename = "soham-tech"
let anothername = myYotubename
anothername = "Chai-aur-code"
console.log(myYotubename);
console.log(anothername);

//In user defined data types the variables store the reference of the memory,so whenever any change happens in one
//it is refelected in another

let userOne = {
    email : "user@gamil.com",
    upi : "soham54@oksbi"
}

let userTwo = userOne;

userTwo.email = "soham@gmail.com"

console.log(userOne);