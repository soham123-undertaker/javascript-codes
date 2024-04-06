// let myName = "Soham       "
// let mydegree = "          b.tech           "

// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heropower = {
    thor: "Hammer",
    spiderman: "sling",

    getaSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//We are injecting the prototype on Object only.
Object.prototype.soham = function(){
    console.log(`Soham is present in all objects`);
}

//Since function, Arrays and String are all objects hence the property that we have defined using "prototype" is available to Arrays also.
heropower.soham()
myHeroes.soham()

//Now an interesting question arises. If we inject property on array..then would it be available on string and functions as well?..Since they all go through objects only.

Array.prototype.hello = function(){
    console.log(`Soham says hello`);
}

//Objects don't get the access on deep() as it has been defined on arrays only. Since Objects are on a greater hierarchy ..so a property defined on Objects can be accessed by all.

// heropower.deep();
myHeroes.hello();



//inheritance
const User = {
    name: "Chai",
    email: "chai@gooogl.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//It means TASupport can now access all the properties of TeachingSupport
}

//We can declare __proto__ outside also...like this
//(Teacher.__proto__ = User) :- It means Teacher can now access all the properties of User

//Above syntax is outdated...inplace of this we have a modern syntax

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) //It works similarly as __proto__ and sets the properties of TeachingSupport to Teacher.


//Now let us come back to the trueLength property that we have discussed at first. We can do it using String.prototype as discussed below. Note:- Here we are giving the property to String only.Objects and Fucntions won't get access to it.
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(this);//here we get "ChaiAurCode    " because trueLength gets the reference if anotherUsername below..which contains 'ChaiAurCode     '.
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"Techno    ".trueLength();