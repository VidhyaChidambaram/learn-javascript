/*jshint esversion : 6*/

const person = {
    "firstName" : "Vidhya",
    "lastName" : "Chidambaram",
    "getFullName" : function() {
        return this.firstName + " " + this.lastName;
    }

};

const person2 = person;
console.log(person2.getFullName());

