/*
Write a function which takes three inputs
input3 has to be a callback function

this callback should add the passed inputs.
*/

function addTwoValues(a,b,c,callbackFunction){
    var returnVal = callbackFunction(a,b,c);
    return returnVal;
}
function callbackFunction(a,b,c){
    return a+b+c;
}

var finalValue=addTwoValues(4,6,9,callbackFunction);
console.log("THE FINAL RESULT IS:" + finalValue)
