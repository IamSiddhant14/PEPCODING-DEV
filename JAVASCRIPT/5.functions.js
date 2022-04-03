
// function expects arguments 
// The value which we pass during calling a function is called parameters
// In js we dont need to define the return type
// function increases code re-use-ability

function add(a, b){ //function declartion

    // console.log(a+b);
    return a+b;

};

let sum = add( 5 ,4); //function invokation/calling
console.log("The sum is "+sum);
console.log("The sum is ",sum);


//In javascript functions are know as frist class citizens
//That is we can treat functions as variables in javascript

//Named function expression
let syaHi = function op(a){
    console.log(a);
}

syaHi("b");

//anonynmus function expression
let syaHii = function(a){
    console.log(a);
}

syaHi("b");

//IIFE  ( Immediately invoked function expression ) Auto calling

//As soon as this line is been executed / runned this function get invoed or get called

let add = (function(a,b){

    console.log(a+b);

})(10, 20);



   let ad = (function(a, b){
       return a+b;
   })(10, 69);