/*jshint esversion : 6*/

// Declared function with function declaration
function declaredFn() {
    console.log("this is a declared fn");
}

// Anonymous function
const anonymousFn = function (name) {
    console.log("this is an anonymous fn : " + name);
};

// assign a function to another function
const functionAssignToAnother = function(fn, name) {
   fn(name);
};

// Assign a subfunction to a main function
functionAssignToAnother.subFn = function () {
    console.log("This is function as a property");
};

//Executor for all functions in this class
function mainFn() {
    anonymousFn("Hello");
    functionAssignToAnother(anonymousFn, "World");
    functionAssignToAnother.subFn();
}


//Invoker
mainFn();