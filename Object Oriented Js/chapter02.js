
// In js, variable names can be created using numbers, letters, and _ character or even $ character.

var camelCaseWay;
var most_usual_way;
//var _variableWay; // uncommon way - used only in libraries

//invalid variable name
//var 4VariableName; //This variable is not accepted by js

/*--------------------*/
// Two ways of assigning a value to a variable

var firstWayVar = "Hello Alekhya";

var secondWayVar;

secondWayVar = "Hello again Alekhya";

//variables are case sensitive

var anApple; // camel case
var AnApple;
var ANAPPLE; // CONSTANT Variable declarations


var commaSeparatedVar1, commaSeparatedVar2, commaSeparatedVar3;

var commaSeparatedVar1 = 1, commaSeparatedVar2 = 2, commaSeparatedVar3 = 3;

var commaSeparatedVar1 = 'undefined', commaSeparatedVar2, commaSeparatedVar3;

/*--------------------*/
// VERY VERY IMPORTANT NOTE
// javascript executes in two phases:
// - Creation phase
// - execution phase
/*--------------------*/

// Please work on exercises from page no - 36

// Continue until page no 59 //end of array section.
//we will begin conditions and loops

//Practise by Alekhya


var a;
var isNum;
var ISNUM;
var _this_is_num;
//the variable should not start with numbers.



//Initialising a variable

var apple=6;
var a,b,c;
var a=1, b=3, d=4;
var l, bm, n=70, i='hello',f;

//operators
var a=20;
var b=30;
var c=a+b;
var d= a+20;

//arithmetic operators
/*
addition '+'
subtraction'-';
multiplication '*';
division'/';
modulo'%';
increment '++';
decrement '--';
*/
//compound operators

var a=60;
a += 30;
a -=10;
a *= 4;
a /=6;

//primitive datatypes;


//If looops
/*
var input = window.prompt("Please enter your name", "Who is this?");

if(input === "alekhya"){
    console.log("Yes this is alekhya");    
}else if(input === "sanjay"){
    console.log("Yes this is sanjay");    
}else if(input === "guest"){
    console.log("Yes this is a guest");    
}else{
    console.log("NO this is nobody");    
}
*/
/*
//Boolean operators
&&
||
!=
!==
!==
==
===

Output of a boolean operation = Boolean type of output


//Arithmetic operators
+ - / *



//Logical operators
|
&
//HAS TO BE A NUMBER - check the truth table

//Assignment operators
= 
*/

//var v = 100;

var v = null;
var v = v || 10;

// true || false = true
// false || true = true
// true || true = true
// false || false = false

console.log("value of v : "+v);




//multiplication program




var total;
for(i=0;i<4;i++)
    {
      for(j=0;j<10;j++)
      {
          total=(i*j);
          total=total+"";
          console.log(total);
    }
        console.log("<br>");
    }


var a=10;
var b=20;

function sum(a,b)
{
    var c= a+b;
    return c;
}

