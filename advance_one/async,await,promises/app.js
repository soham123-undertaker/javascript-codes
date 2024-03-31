//Synchoronous Js
/*
    Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

    eg:-
    console.log("one");
    console.log("two");
    console.log("three");
 */

//Asynchronous JS
/*  
    Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/

function hello(){
    console.log("hello");
}
setTimeout(hello,2000)  //timeput :- 2s == 2000ms

//Callbacks
//A callback is a function passed as an argument to another function

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum); //do not use sum()...it means we want to execute the sum function here only.

//Callback Hell
/*
    Callback Hell :- Nested callbacks stacked below one another forming a pyramid structure.
    This style of programming becomes difficult to understand and manage.
 */

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//callback hell
// getData(1,()=>{
//     console.log("getting data2...");
//     getData(2,()=>{
//         console.log("getting data3...");
//         getData(3,()=>{
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });

//data1
//data2
//data3


//To solve the problem of callback hell...the concept of promises comes into picture

/* 
    PROMISES:-
    promise is for "eventual" completion of task. It is an object in JS.
    It is a solution to callback hell.

    let promise = new Promise((resolve,reject)=>{...})
                                    |->function with 2 handlers

    *resolve and reject are callbacks provided by JS
*/

let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve(123) //To fulfill the promise w use resolve() function and it is a function created by javascript only.We can pass values or statements also in the resolve function call.
})

/* There are 3 states in Js, one is pending state, one is fulfilled state and last one is rejected state. 
1)Pending :- the result is undefined.
2)Resolved :- the result is a value(fulfilled)
3)Rejected :- the result is an error object.
*/

//promise can also be rejected..The reject() function is called for such purpose.

let promise1 = new Promise((resolve,reject)=>{
    reject("Error ocurred");
})

//Generally we dont create Promise() object. Generally an API sends a Promise() and we just handle it.

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data : ",dataid);
            resolve();
        },5000)
    })
}

//The above function returns a promise that a function will be executed in 5 sec.

/*Now we will learn...if we have got a promise then how we are going to use it. To use promises we use ".then()",".catch()"
promise.then((res)=>{...})
promise.catch((err)=>{...})

A promise may be fulfilled or rejected..we cannot do any work if promise is pending. To do some work if promise has been fulfilled we use .then() and if it has not been fulfilled (or rejected) then we use .catch()
*/

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("completed");
        reject("failed");
    });
};

//then gets a parameter..It is the value that we have passed in the resolve().It is optional,if we want we don't need to take the parameter also and simply use .then(()=>{...}).
let promises = getPromise();
promises.then((res)=>{
    console.log("promise fulfilled "+res);
})

//if promise has been fulfilled then we can do the above function. But it won't work if a problem has arised.To handle errors we use .catch()


//catch() also gets a parameter...It is the value that we have passed in the reject().It is optional,if we want we don't need to take the parameter also and simply use .catch(()=>{...}).
promises.catch((err)=>{
    console.log("Error ocurred "+err);
})

//Promise Chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000)
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000)
    })
}

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

//In the above case of function calls..both will be executed simultaneously.But we want that after asyncFunc1() is successfully resolved then we want ti execute asyncFunc2(). In that case we use promise chaining.

// console.log("Fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res_val)=>{
//         console.log(res_val);
//     })
// })

//Better way to write the above promise chaining is given below.
console.log("Fetching data1...");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("Fetching data2...");
    return asyncFunc2();
}).then((val=>{
    console.log(val);
}))

//ASYNC AND AWAIT
/*async function always returns a promise. We can make any function an 'async' function.
async function myFunc(){...}

await pauses the execution of its surrounding async function until the promise is settled.
*/

// function hello(){
//     console.log("hello");
// }

//Above function is a normal function..now if we add 'async' keyword infront of it then it becomes a async function

async function hello(){
    console.log("hello");
}