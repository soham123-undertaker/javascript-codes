//Here we will see about switch case pattern
//syntax
// switch(key){
//     case value:
//         break;

//     default:
//         break;
// }

const month = 3
switch(month){
    case 1:
        console.log("JANUARY");
        break;
    case 2:
        console.log("FEBRUARY");
        break;
    case 3:
        console.log("MARCH");
        break;
    case 4:
        console.log("APRIL");
        break;
   
        default:
            console.log("default case match")
            break;
}

//Flasy values
/*
1) flase
2) 0
3) -0
4) BigInt 0n
5) ""
6) null
7) undefined
8) NaN
*/

//All others are truthy values

/* 
1) "0"
2) "false"
3) " "
4) []
5) {}
6) functon() {}  //empty function is a truthy value
*/

//checking of empty array
const email = []
if(email.length === 0){
    console.log("Array is empty");
}

//checking of empty objects
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//Ternery operator

//syntax :- condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");