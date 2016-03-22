
var aVar = function(){
    console.log("Hello world");
}

function aFnWithName(user, message){
    console.log("Hello "+user+", "+message);
}

aFnWithName("Sanjay","How are you?");
aFnWithName("Alekhya","Please always Smile!");
aFnWithName("Sanjay","you too!");

// just like the way you use [] to get array elements using a variable, you can also use this
// approach to call a function using ()
var arrayMy = [0,1,2];
console.log(arrayMy[0]);

// Simply execute a function by adding () to variable which points to a function or
// simply use the funtion name followed by ()
aVar();

//Return value
var mySumFunction = function(a, b){
    return a+b;
}

console.log("Summing a, b: "+ mySumFunction(2,3));

var c = mySumFunction(3,4);

console.log("printing the value c: "+c);

// Function returning an undefined value by default

var myFnRetUndefined = function(){
    //By default, function returns undefined even though you don't see a return statement. It is all invisible.
}

var returedVal = myFnRetUndefined();
console.log("Returned value from fn: myFnRetUndefined - "+returedVal);

// Incomplete parameters

var retValFromIncompArgs = mySumFunction(2);

console.log("retValFromIncompArgs: "+retValFromIncompArgs);

/* Function has a built-in variable called arguments */

var func1 = function(a,b,c,d,e){
    console.log("param1:"+a);
    console.log("param2:"+b);
    console.log("param3:"+c);
    console.log("param4:"+d);
    console.log("param5:"+e);
    console.log(arguments);    
}

//func1();
//func1(1);
//func1("","Sanjay",undefined,1, 2);
//func1("Alekhya", "Sanjay");
//func1(1,2,3,4);
//func1(1,2,3,4,5,6,7,8,9);

/************************************************************/
//EXERCISE ON SUM
/************************************************************/

var sumTakes2Params = function(a, b){
    return a+b;
}

var sumTakes3Params = function(a, b, c){
    return a+b+c;
}

var sumTakes4Params = function(a, b, c, d){
    return a+b+c+d;
}

console.log("sumTakes2Params(2,3):"+sumTakes2Params(2,3));
console.log("sumTakes3Params(2,3,4):"+sumTakes3Params(2,3,4));
console.log("sumTakes4Params(2,3,4,5):"+sumTakes4Params(2,3,4,5));

/**** EFFICIENT WAY *************/

var sumOfAnyParams = function(){
  var i, sum = 0;
    for(i=0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }  
    
    return sum;
};

console.log("sumOfAnyParams(2,3):"+sumOfAnyParams(2,3));
console.log("sumOfAnyParams(2,3,4,5,6,7,8,9,10):"+sumOfAnyParams(2,3,4,5,6,7,8,9,10));
console.log("sumOfAnyParams():"+sumOfAnyParams());





//alekhya practice chapter 3

var sum =function(a,b){
    var c=a+b;
    return c;
}
console.log("sum of a+b is:"+sum(5,7));



var args=function(a,b){
    return args;
}
console.log(args(1,6,7,5,4));




var a=7;
function f(){
    var b=5;
    var a=(a+b);
    return a;
}
console.log(a);





//call back functions


var invoke_add=function(a,b)
{
    return a()+b();
}

var one=function()
{
    return 7;
}

var two=function(){
    return 2;
}

console.log("the reuslt is:" +invoke_add(one,two) );

//another way for above program



//callback examples

function multiple_add_invoke(a,b,c){

    var i, ar = [];
    
    for(i=0;i<3;i++){
        ar[i]= arguments[i]*2;
    }

    return ar;
}

console.log("typeof return from multiple_add_invoke"+typeof multiple_add_invoke(1,2,3));


function addOne(a){
    return a+1;
}

console.log("the reuslt is: " + multiple_add_invoke(5,6,3));
console.log(addOne(38));


//self-ivoking functions

(
    function(name){
        console.log('hello' + name + '!');
    }
)('\t dude');

function multiplyByTwo(a, b){
    var ar = [];
    
    for(i=0; i<arguments.length; i++){
        ar[i] = arguments[i] * 2;
        
    }
    
    return ar;
}

//console.log(multiplyByTwo(1,2));


function multiplyByThree(a, b){
    var ar = [];
    
    for(i=0; i<arguments.length; i++){
        ar[i] = arguments[i] * 3;
        
    }
    
    return ar;
}

//console.log(multiplyByThree(1,2));


function operateOnArgumentsBasedOnFn(input1, input2, operation){
    var ar = [];
    
    for(i=0; i<arguments.length; i++){
        ar[i] = operation(input1,input2);
        
    }
    
    return ar;
}

function addTwoValues(a, b){
    return a+b;
}

var addedValue = operateOnArgumentsBasedOnFn("Hello ", "Alekhya", addTwoValues);

console.log("addedValue"+addedValue);

//re-write functions

function rewrite(){
    alert('A!');
     rewrite =function(){
        alert('B!');
    };
}

//calling ojects


var hero={
    age:'30',
    occupation:'ninja',
    firstname:'alekhya',
    name: function(){
       return 'Firstname is :' + firstname + ' last name: '+ lastname;
    }
    
    
}



