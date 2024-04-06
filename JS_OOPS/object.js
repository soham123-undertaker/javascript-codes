/*
In JS everything is an object. JS is an prototypal inheritence language.It searches beyond its scope.If data not found in a particular scope then it searches in the parent scope and if still data is not found then it searches in its ggrandparent scope and so on until it obtains null.

In JS Array, Strings are Objects only.
Surprisingly function() in JS can be called an object also.

function
        \
         \
          \
           \ 

Array----- Objects---------null
          /
         /
        /
       /
      /
string
*/


function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);