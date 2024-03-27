console.log("hello");

//WINDOW OBJECT :- The window object represents an open window in a browser. It is browser;s object(not Javascript's)& is automatically created by browser.
//It is a global object with lots of properties and methods

window.console.log("hello2")//same as console.log

/*
    DOM:= When a web page is loaded, the browser creates a Document Object Model(DOM) of the page

    We can access all the HTML codes in JS using DOM.
    All the HTML codes that we have written gets converted to an object when it comes to JS.And this is a special object whose name is "DOCUMENT", and this "DOUMENT" object is available within "WINDOW" object.So "DOCUMENT" is a subobject of "WINDOW".

                    window          <-node
                      |
                    document         <-node
                      |
                    html             <-node
                     |
                    /  \
                   /     \
                  /         \ 
                 head\        body         <-node
                  /\   \       /\
                 /  \     \  div  script    <-node
                meta title  link    
 */

/*
    Difference between console.log & console.dir?

    console.log - just prints on the screen
    console.dir - prints the properties and methods of special objects like "WINDOW" object.
 */

    console.dir(document.body); //prints all the properties of document.body
    console.log(document.body); //prints the body of HTML

    console.log(document.body.childNodes[1]); //prints the first child of body

    document.body.style.background = "green";//We can change the style of body using DOM

    /*document.body.childNodes[3].innerText = "abcd";
        We can change the text of nodes also
    */


/*DOM MANIPULATION :=
    To change elements using DOM ...at first we have to select elements.

    Note:- all these methods are under the document object*/

//1)Selecting with id-> document.getElementById("Id_name")
let head = document.getElementById("heading"); //h1 tag
console.log(head);
console.dir(head);

//2)Selecting with class -> document.getElementsByClassName("class_name")..It returns an HTMLCollection
let head2 = document.getElementsByClassName("head");
console.log(head2);
console.dir(head2);

//3)Selecting with tag -> document.getElementsByTagName("tag_name");
let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

/*4)We can select all...i.e, id,class and tag using "Query Selector"
|
|-->document.querySelector("#id_name/.class_name/tag_name"); ->It returns the first Element
|
|-->document.querySelectorAll("#id_name/.class_name/tag_name"); ->selects all the nodes with the given id_name,class_name or tag_name---returns a NodeList
*/

let elements = document.querySelector("p");
console.dir(elements);
console.log(elements);

let allelements = document.querySelectorAll("p");
console.log(allelements);
console.dir(allelements);

//Properties of DOM
// 1)tagName :- returns tag for element nodes
console.log(elements.tagName);
//2)innerText :- returns the text content of the element and all its children
console.log(elements.innerText);
//3)innerHTML :- returns the plain text or HTML contents in the element
console.log(elements.innerHTML);
//4)textContent :- returns textual content even for hidden elements
let div = document.getElementById("fruits");
console.log(div);
console.log(div.textContent);
console.log(div.innerText); //not work



//In a DOM tree there are three types of nodes
/*
  1) text nodes
  2) comments
  3) elements
*/

/*
  Node: firstChild property
The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.

If the node is a Document, this property returns the first node in the list of its direct children.

Note: This property returns any type of node that is the first child of this one. It may be a Text or a Comment node. If you want to get the first Element that is a child of another element, consider using Element.firstElementChild.

Value
A Node, or null if there are none.

Example
This example demonstrates the use of firstChild and how whitespace nodes might interfere with using this property.

HTML
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>

In the above, the console will show '#text' because a text node is inserted to maintain the whitespace between the end of the opening <p> and <span> tags. Any whitespace will create a #text node, from a single space to multiple spaces, returns, tabs, and so on.

Another #text node is inserted between the closing </span> and </p> tags.

If this whitespace is removed from the source, the #text nodes are not inserted and the span element becomes the paragraph's first child.

HTML
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
Now the console will show 'SPAN'.

To avoid the issue with node.firstChild returning #text or #comment nodes, Element.firstElementChild can be used to return only the first element node.
*/



/*Node: isConnected property:-
The read-only isConnected property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

Value
A boolean value that is true if the node is connected to its relevant context object, and false if not.

Examples
JS:-
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true 
*/



/*
  Node: lastChild property
The read-only lastChild property of the Node interface returns the last child of the node, or null if there are no child nodes.

Note: This property returns any type of node that is the last child of this one. It may be a Text or a Comment node. If you want to get the last Element that is a child of another element, consider using Element.lastElementChild.

Value
A Node that is the last child of the node, or null if there are no child nodes.

Example
JS
Copy to Clipboard
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
 */



/*
Node: nextSibling property
The read-only nextSibling property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.

Note: Browsers insert Text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using Node.firstChild or Node.previousSibling may refer to a whitespace text node rather than the actual element the author intended to get.
You can use Element.nextElementSibling to obtain the next element skipping any whitespace nodes, other between-element text, or comments.

Value
A Node representing the next sibling of the current node, or null if there are none.

Example
HTML:-
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<br />
<output><em>Not calculated.</em></output>

JS:-
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let result = "Siblings of div-1:<br/>";

while (el) {
  result += `${i}. ${el.nodeName}<br/>`;
  el = el.nextSibling;
  i++;
}

const output = document.querySelector("output");
output.innerHTML = result;

output:-
Here is div-1
Here is div-2

Siblings of div-1:
1. #text
2. DIV
3. #text
4. BR
5. #text
6. OUTPUT
7. #text
8. SCRIPT
 */



/*
Node: parentElement property
The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.

Value
An Element that is the parent element of the current node, or null if there isn't one.

Example
JS:-
if (node.parentElement) {
  node.parentElement.style.color = "red";
} 
*/

