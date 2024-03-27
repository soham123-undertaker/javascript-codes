/* 
    Events in JS:-
    The change in the state of an object is known as an Event
    Event are fired to notify code of "interesting changes" that may affect code execution.

    1)Mouse ecents :- click,double click etc
    2)Keyboard events :- keypress,keyup,keydown
    3)Form events :- submit etc
    4)Print event and many more
*/
//Event Handling on JS
let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("Btn1 was Clicked");
    let a = 25;
    a++;
    console.log(a);
}


//If we have handled event both on Inline and on JS, the the one on JS will get priority

let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("div is being attacked");
}

//Event Object
/*
    It is a special object that has details about the event.
    All event handlers have access to the Event Object's properties and methods.

    node.event = (e)=>{
        //handle event
    }
    e.target, e.type, e.clientX, e.clientY
 */

    let btn2 = document.querySelector("#btn2");
    btn2.ondblclick = (e)=>{
        console.log(e);
        console.log(e.type);
        console.log(e.clientX,e.clientY);
    }

//Event Listeners
/*
    node.addEventListener(event,callback)
    node.romoveEventListener(event,callback)

    Note:- the callback reference should be same to remove
*/
let divval = document.querySelector("div")

// divval.addEventListener("onmouseover",(e)=>{
//     console.log("div r balatkar hoye gelo");
//     console.log(e);
// })
const handler = ()=>{
    console.log("div r balatkar hoye gelo");
}
divval.addEventListener("onmouseover",handler)

// divval.removeEventListener("click",(e)=>{
//     console.log("div r balatkar hoye gelo");
//     console.log(e);}
//     ) ---> will not work as the same refernece of the handler fucntion is required

divval.removeEventListener("click",handler);
//now it will work