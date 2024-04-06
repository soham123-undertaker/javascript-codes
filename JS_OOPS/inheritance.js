//Inheritance is the property by which one class inherits the properties of another class.

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

//We inherit from another class using the 'extends' keyword
class Teacher extends User{
    constructor(username,email,password){
        super(username); //super keyword calls the parent class and set the value of the overwridden variable.Note:- Earlier it used to happen using .call() method.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","123");
chai.addCourse();

const masalaChai = new User("masalaChai")
// masalaChai.addCourse() :- Do not have access as this function is in child class
masalaChai.logMe();
chai.logMe(); //chind class have acess to parent class functions as it is inheriting.