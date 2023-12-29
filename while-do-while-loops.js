//while loops

/*syntax :-
    initialization
    while(condition){
        statements;

        increment;
    }
*/

let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}

//iterating array through while loops

let myArray = ['flash', 'batsman','superman']

let arr = 0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

//do-while loop

/*syntax :-
intialization
do{
    statements;
}while(condition);
*/

let score = 1

do{
    console.log(`Score is ${score}`);
    score++;

}while(score <= 10);