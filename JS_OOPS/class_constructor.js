class User{

    //constructor is function which is immediately invoked whenever a new object is created from class using 'new' keyword.
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUssername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Soham","habu@gmail.com","SonGoku");
console.log(chai);
console.log(chai.changeUssername());

//We know JS doesn't provide classes directly ...so this happens behind the scenes using prototypes

function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUssername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("chai","chai@gmail.com","123")
console.log(tea);