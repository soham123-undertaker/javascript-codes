let div = document.querySelector("div");
console.log(div);

//getAttribute :- to get the Attribute value := getAttribute(attr)
let id = div.getAttribute("id");
console.log(id);

let name1 = div.getAttribute("name");
console.log(name1);

//setAttribute(attr,value) :- to set the attribute value
let para = document.querySelector("p");
console.log(para.setAttribute("class","newclass"));

//'style' attribute := to apply style attribute we do node.style
let divs = document.querySelector("div");
divs.style.backgroundColor = "green";
divs.style.fontSize = "26px";
// divs.innerText = "SOHAM";

//Till now we have learnt to access and change DOM, now we are going to learn how to add elements on DOM.

/*Adding something on JS is a 2 step process...
 1).First we have to create new element.
    We can create an element by the following code-
    let el = document.createElement("div"/any other)

 2). Then we can insert this node by the following DOM manipulations  
*/

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);
let div1 = document.querySelector("div");

//Inserting Elements
//1)node.append(el) :-adds at the end of node(inside)
div.append(newBtn);

//2)node.prepend(el) :- adds at the start of node(inside)
div.prepend(newBtn);

//3)node.before(el) :- adds before the node(outside)
div.before(newBtn);

//4)node.after(el) :- adds after the node(outside)
div.after(newBtn);

//lets create another element
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>My name is SOHAM</i>";
document.querySelector("body").prepend(newHeading)


//Deleting elements
//node.remove() :- removes the node
let param = document.querySelector("p");
param.remove();