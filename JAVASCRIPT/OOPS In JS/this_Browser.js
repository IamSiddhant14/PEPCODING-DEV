//Window object carries all the bowser methods

//********************************************************

//console.log(this) // It will result in window objectwindow Object

//********************************************************

// function f(){
//        console.log(this)
// }

// f() //It will result in window object window Object

// 


//********************************************************

// let obj = {
//     f: function(){
//            console.log(this)
//     }
// }

// obj.f() //This will result in object itself 


// let obj = {
//        f: function(){
//               function g(){
//                      console.log(this)
//               }
//               g()
//        }
// }

// obj.f() //This will result window object



//Sumarry -

//Context : Browser + non strict ->

// global area -> Window Object

// function - > Window Object

// obj -> function - object Itself

// obj - function - function -  Window Object