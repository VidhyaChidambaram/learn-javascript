/*jshint esversion : 6*/
function testArguments() {
    let sum = 0;
    for(let i = 0; i< arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log("Arguments test" + arguments[0]); //this will print garbage as arguments is a object
console.log(testArguments(10, 20, 30, 40, 50, 60));

const arrayTest = function() {
    const myArray = [10, 20, "Hello", {}];
    console.log(myArray);
    myArray.push(30);
    console.log(myArray);
    myArray.pop();
    console.log(myArray);
    myArray.shift("Hello");
    console.log(myArray);
    myArray.unshift("Hello");
    console.log(myArray);
    myArray.unshift("World");
    console.log(myArray);
    myArray.forEach( (item, index, array) => console.log("This is the current element " + item + " located at index : " + index + " of array :" + array));
};


arrayTest();