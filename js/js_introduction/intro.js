console.log("Hello from the NODE");
// TO run this js file through node we will simply type in the terminal - node <filename>

//variable declartion with let var and const

var a ; // frist the variable is been initalzed with undefined
console.log(a);
a=20;
console.log(a);
//javascript is an synchrounus and a single threaded language
a="20";
console.log(a);
// a="Hello"; dynamic behaviour of javascript
console.log(a);
a= true;
console.log(a);
//javascript is an dyanimically typed language that is dont need to specifie the type of variable as such
// semicolon is not compulsory in javascript
// Javascript is a single threaded language not multithreaded 
//javascript is a sychronus language



//let and const :-

//frist problem of var : redeclartion
//That is 
var a = 2;
console.log(a);
var a = "string";
console.log(a);



// But in case of "let" keyword we could not redeclare the same variable where was this was allowed in var
//but here re-defining is allowed , same as that in var keyword javascript

//redeclaring(not allowed) and redefing(allowed) are two diffrent things

let  b = 2;
console.log(b);
//This will result in an error
// let b = "hello";
// console.log(b);

//Whether the number is prime or not
let flag = true;
let num = 13;

for( let i =2 ; i*i < num ; i++){//In loop we should not use "var" keyword instead we should use "let "as its value is saved for a particular iteration
    //"let" has block scope that is it have exsitance within the block only unlike "var " which has function scope
    if( num % i == 0){
        flag = false;
        break;
    }
}

if( flag == true){
    console.log(num +"is prime");
}else{
    console.log(num + "is not prime")
}

//problem -2 with var :

if(10 %2 ==0){
    var c =2;
    console.log(c);
}

console.log(c); //no error


//Here error as let has its existance within the block only that is block scope
// if( 10%2 ==0){
//     let k = 1;
//     console.log(k);
// }
// console.log(k); 


// I hereby plege to use "let" only and not "var" because of the following problems










