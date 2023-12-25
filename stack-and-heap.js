//There are two types of memory available
//1) stack memory
//2)Heap memory

//stack is used to store primitive data types
// whereas Heap is used to store non-primitive data types

let myYotubename = "soham-tech"
let anothername = myYotubename
anothername = "Chai-aur-code"
console.log(myYotubename);
console.log(anothername);

let userOne = {
    email : "user@gamil.com",
    upi : "soham54@oksbi"
}

let userTwo = userOne;

userTwo.email = "soham@gmail.com"

console.log(userOne);