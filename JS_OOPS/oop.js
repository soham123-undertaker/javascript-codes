//Object Literal
const user = {
    username: "Soham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databse");
        //this keyword symbolises current context..
        console.log(`Username : ${this.username}`); //it tells to username of current context
        console.log(this); //prints the current context i.e user object.
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//is we use this in global context then it will print empty object {}. However if we use 'this' in browser, then ..since browser have many API access such as DOM,fetch()..so we get 'Window' object on browser on using this.

console.log(this);

//constructor function
//'new' keyword is an constructor function.. What it is used for is that...from a same object we can create many instances.
//e.g:- const promiseone = new Promise()......const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username; //Left-hand side is the variable and the right hand side is the value that we have obtained

    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //We can also write methods here
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this //on returning this we pass on the object.
}

// const userone = User("hitesh",12,true)
// const usetwo = User("ChaiaurCode",11,false)
// console.log(userone);

//In the above case we saw that usertwo has been called after userone and we have printed only userone..the values of username,logincount and isLoggesIn has been overwritten inspite of calling only userone.
//So this is a major problem..For that we use "new" keyword. It creates an instance and the values don't get overwritten,

const userone = new User("hitesh",12,true)
const usertwo = new User("ChaiaurCode",11,false)
console.log(userone);
console.log(usertwo);

/*Note:- 1) Whenever we use a "new" keyword a new object is created which is called an instance. 
         2) A constructor function is called due to "new" keyword.*/