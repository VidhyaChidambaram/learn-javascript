/*jshint esversion : 6 */
const person = {
    "address" : {
        "street" : "ABC Apartments",
        "city" : "Alpharetta",
        "state" : "GA"
    },
    "firstName" : "Vidhya",
    "lastName" : "Chidambaram"
};

const secondPerson = {
    "address": {
        "street" : "BCD valley",
        "city" : "Cupertino",
        "state" : "CA"
    },
    "firstName" : "John",
    "lastName" : "Doe"
};

person.isFromState = function(matcherState) {
    return this.address.state === matcherState;
};

console.log(person.isFromState("CA"));
console.log(person.isFromState("GA"));