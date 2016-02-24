/*Ways to create different types of data in js*/
var numberVar = 1000;

console.log("Printing the typeof variable numberVar with value 1000: " + typeof numberVar);

//Re using an existingvariable which is declared before.
numberVar = 10000.00;

console.log("Printing the typeof variable numberVar with value 1000.00: " + typeof numberVar);

var stringVar = 'My First String Variable';

console.log("Printing the typeof variable stringVar: " + typeof stringVar);

var undefinedVar;

console.log("printing the typeof variable undefinedVar: " + typeof undefinedVar);

// Addition of two numbers

console.log("Addition of two numbers: "+2 + 2.2);

console.log("Addition of two numbers with one number being an actual string :" + (2 + "2.2"));
console.log("Addition of two values with one being a number and other as a string :" + (2 + "Alekhya"));

// Any other aritthmetic operation is different from "+" operator
//'-' will try to convert both operands into actual numbers and then apply the subtraction operation
console.log("sub: "+ (2-"3"));

// Just like above division or multiplication operator will try to convert the operands into actual numbers
// and will then apply the arithmetic operation

// Operator Precedence
//--------------------

//CHeck out the operator precedence in mozilla website
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

