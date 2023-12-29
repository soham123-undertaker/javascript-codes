//for

for(let i = 0; i < 10; i++)
{
    const element = i;
    if(element == 5)
    {
        console.log("5 is best number");
    }
    console.log(element);
}

//nested for loop
for(let i = 1;i <= 10; i++){
    console.log(`Outer loop value : ${i}`);
    for(let j = 1;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

//Iterating through arrays
let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//Important keywords in loop is break,continue
//"break" is used to go out of the current iterative loop and "continue" forces next iteration

//break keyword demostration
for (let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

//continue keyword demonstration
for (let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}