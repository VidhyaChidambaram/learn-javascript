/*jshint esversion: 6 */
/*
    Functions to explain variable declarations, usage of typeof operator
*/
function displayResults() {
    var firstName="John", lastName="Doe", age=35;
    document.getElementById('firstName').innerHTML=firstName;
    document.getElementById('lastName').innerHTML=lastName;
    document.getElementById('age').innerHTML = age.toString();
    console.log("Type of firstName and lastName is " + typeof(firstName) + " "+ typeof(lastName));
    console.log("Type of age is : " + typeof(age));
    console.log("Type of null is : "+ typeof(null));
    console.log("Type of undefined is : " + typeof(NaN));
}

// Usage of === operator

const val1 = 10;
const val2 = 20;
console.log(val1 === val2);

const myObj = {
    "hello": "world"
};
const myObj1 = myObj;
const myObj2 = {};
console.log(myObj1 === myObj);
console.log(myObj1.hello);
console.log(myObj == myObj2);

// difference between undefined vs null;
//anything that is not defined is undefined, anything optional is designated null
const person = {
    "firstName" : "John",
    "middleName" : null,
    "lastName": "Doe"
};
console.log(person.age); // returns undefined
console.log(person.middleName); // returns null

//Arrays
const myArray = ["item1", 1, 2, "item2"];
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[0]);
console.log(myArray[10]); // no Array out of bounds exception
myArray[5] = "iExist";
console.log(myArray[5]);
console.log(myArray.length);


// Wrapper objects
const myProp = String("hello");
console.log(myProp.length);
const myProp2 = "hello";
//concept : js internally converts primitive string to wrappr object "String" by default
console.log(myProp2.length);