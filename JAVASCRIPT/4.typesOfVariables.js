//There are two type of data type in javascript :
// 1.> primitive - Number ,String , boolean ---------- stack per he store hota hai or reference variable bhi stack per he banta hai

// 2.> Reference - Array ,Objects ,Function ---------- heap per store hota hai and stack per reference variable banta hai 
//   YT : https://www.youtube.com/watch?v=lW_erSjyMeM

// We will be dealing with two type of enviroment for now one is the browser and the another one is node js

// variable
// loops
// if else
// let var const

//There is nothing like char in javascript there are only string 

//javascript is an synchrounus and a single threaded language

// JavaScript is single threaded and has a synchronous execution model.
// Single threaded means that one command is being executed at a time.
// Synchronous means one at a time i.e. one line of code is being executed at time in order the code appears.
// So in JavaScript one thing is happening at a time

// When we are trying to access an variable which is not been defined yet then it would result in an reference error 

//variable declartion with let var and const

// var a ; // frist the variable is been initalzed with undefined
// console.log(a);
// a=20;
// console.log(a);

// a ="20";
// console.log(a);
// // a="Hello"; dynamic behaviour of javascript
// console.log(a);
// a= true;
// console.log(a);
// // assigning value to "a" as null
// a= null;
// console.log(a);

// //javascript is an dyanimically typed language that is dont need to specifie the type of variable as such
// // semicolon is not compulsory in javascript
// // Javascript is a single threaded language not multithreaded 
// //javascript is a sychronus language by default.

// //let and const :-

// //frist problem of var : redeclartion
// //That is 
// var a = 2;
// console.log(a);
// var a = "string";
// console.log(a);



// // But in case of "let" keyword we could not redeclare the same variable where was this was allowed in var
// //but here re-defining is allowed , same as that in var keyword javascript

// //redeclaring(not allowed) will result in an syantax error and redefing/reassigning (allowed) this two are two diffrent things

// let b = 2;
// console.log(b);

// //This will result in an error
// // let b = "hello";
// // console.log(b);

// // This is possible in case of let and var 
// b=4; //redefining
// console.log(b);

// //Whether the number is prime or not
// let flag = true;
// let num = 13;

// let a;

// a= 10;//Although this is possible 



// for( let i =2 ; i*i < num ; i++){//In loop we should not use "var" keyword instead we should use "let "as its value is saved for a particular iteration
//     //"let" has block scope that is it have exsitance within the block only unlike "var " which has function scope
//     if( num % i == 0){
//         flag = false;
//         break;
//     }
// }

// if( flag == true){
//     console.log(num +"is prime");
// }else{
//     console.log(num + "is not prime")
// }

//problem -2 with var :

if(10 % 2 ==0){
    var c = 277777777777777;
    console.log(c);
}

console.log(c); //no error , only the let and const variables are block scoped and the var type variable isnt block scoped


//Here error as let has its existance within the block only that is block scope


if( 10%2 ==0){
// Here this k doesnt exist after this block
    let k = 1;
    console.log(k+"This one ");
}
console.log(k); 
// This 'let' variable will result in an error but in case of 'var' this wont result in an error

// I hereby plege to use "let" only and not "var" because of the following problems (Will get the refrens later to this sentence)

//Const

const d = 10;
// d = 2;
// const e ;
// here "e" is value as undefined and now since it is of type const we couldnt re-define it to lets say" e=8" 
// means now we could neither reasign nor redeclared the variable
// whereas the reasigning  thing is possible in "let" 
// And the reasigning and the redeclarion thing is possible in "var"



//concatenation in javascript
console.log("I am from outside "+d);
console.log("I am from outside ",d);

console.log("2",d);
console.log("2 "+d);


//var is function scoped and let/const are both function and blocked scope unlike var which is only function scoped, try the below example

var a = 10;
function c(){
    var a = 30;
    console.log(a);
}
c();
console.log(a);

// output: 30 , 10



var a = 10;
if(true){
    var a = 30;
    console.log(a);
}

console.log(a);

// output: 30 , 30