/*Here we will learn object destructuring which will be useful hwile learning react.
Because in react we will get Objects and we will have to destructure it*/

const course = {
    coursename : "JS in hindi",
    price : "1000",
    courseInstructor : "Soham"
}

//course.courseInstructor :- This is the conventional way but it we will see another way which is used more

const {courseInstructor : ins} = course  //we can use another name in place of courseInstructor by declring it beside colon
console.log(ins);


//Concept of APIs

//All values from backend come in the form of JSON. It is a type of Object only

//Below is an example of JSON
/*
{
    "name" : "Soham",
    "coursename" : "JS in hindi",
    "price" : "free"
}
Here keys are also strings
*/

//Sometimes we get APIs in the form of an Array also. It is an array of Objects