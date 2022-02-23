// There exist two code execustion modes in javascript one is the strict mode and another one is the non-strict mode , in strict mode as the the name sugget its vwry strict with respect to the syantx unlike in the case of an non strict mode. To enable strict mode we simply write - use strict in " " followed by a semicolon - "use strict" default behaviour is non-strict mode

// ************ Node -> non Strict Mode 


//console.log(this) // global area  // Empty Object

// inside a function

// function f(){
//        console.log(this)  //THIS WILL RESULT IN AN GLOBAL OBJECT
// }

// f()


// inside a function inside an  Object

// let obj ={
//    name : 'rahul',

//    f:function(){
//          console.log(this)
//    }
// }