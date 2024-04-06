class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    //This function provides a unique id(assume) to ever User created.

    //In normal every object that gets instantiated from class can get access to createId()...but sometimes we want that all the objects that get instantiated from class don't get access to createId()...for that we use static keyword. This function is not accessible to child classes as well.
    static createId(){
        return `123`
    }
}

const soham = new User("Soham")
// console.log(soham.createId()); //Will not run as this object does not have access to created()

