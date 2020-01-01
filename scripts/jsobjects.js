/*jshint esversion: 6 */

//type 1 = initialize with empty curly braces
const obj = {};
console.log(obj);
obj.intro="hello";
obj.secondProp ="helloworld";
console.log(obj);
console.log(obj.secondProp);

//type 2= inline objects
const secondobj = {
    "prop1": "hello",
    "prop2": "world",
    "prop3": true,
    "prop4" : 5
};
console.log(secondobj);

//dynamic objects

const dynamicProp = "prop2";
console.log(secondobj[dynamicProp]);
console.log(secondobj.prop1);

//nested objects

const topLevelObj = {
    "item1" : "coffee",
    "item2" : "tea",
    "breakfast": {
        "cereals" : "oatmeal",
        "lunch" : "rice",
        "numberOfTimes" : 3
    }
};
console.log(topLevelObj.breakfast);
console.log(typeof(topLevelObj.breakfast.numberOfTimes));
//usage of [] instead of . operator
console.log(topLevelObj.breakfast["lunch"]);