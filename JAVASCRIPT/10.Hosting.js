// ***********************************************************************
//NORMALE CASE FOR VAR

var a = 2

function greet(){
      console.log('Hello') 
}

greet()
console.log(a)

// ***********************************************************************
//NORMALE CASE FOR LET

let a = 2

function greet(){
      console.log('Hello') 
}

greet()
console.log(a)

//*************************************************************************** 
//HOISTING CASE FOR VAR

greet()
console.log(a)

var a = 2

function greet(){
      console.log('Hello') 
}



// ***********************************************************************
//HOISTING CASE FOR LET

// TEMPORAL DEAD ZONE - it is just a area where if you try to access variables defined with let and const before their initialization you wont be able to do it.

//This would result in an initalization error as due to hosting we will be assining "let a "as " undefined" and since in" let" or "const" redeclaring the same variable isnt possible Therfore it would result in an error for that matter

//console.log('Hello') 



// ***********************************************************************
//HOISTING CASE FOR CONST
//This would result in an initalization error as due to hosting we will be assining "let a "as " undefined" and since in" let" or "const" redeclaring the same variable isnt possible Therfore it would result in an error for that matter

// greet()
// console.log(a)

// let a = 2

// console.log(a)

// function greet(){
//       console.log('Hello') 
// }
