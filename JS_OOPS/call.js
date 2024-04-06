function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    // SetUsername(username)
    //This doesn't call the function and set the username. This function call just sends a reference of usesrname to the function which sets it's username and it does not get reflected just like call by value in c++.
    //To reflect the changes..we use .call()

    SetUsername.call(this,username); //Now this sets the username

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com","123");
console.log(chai);