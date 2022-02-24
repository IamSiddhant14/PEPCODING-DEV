const fs = require('fs');

let f1p = fs.promises.readFile("f1.txt");

let f2p = fs.promises.readFile("f2.txt"); 

let f3p = fs.promises.readFile("f3.txt"); 

f1p.then(function(data){
  console.log(" "+data)
    cb(data);
    cb;
})

f2p.then(cb);//In case of passing an callback function no need pass the parameters , but while declaring the function there it-self then we need to pass in the parameters , in fact we never pass parameter in case call back function

f3p. then(cb);

function cb(data){
    console.log( "File Data -- >" + data);
}

//*********************************************************/

// const fs = require("fs");

// console.log("Before");

// fs.readFile("f1.txt", cb1);

// function cb1(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//     fs.readFile("f2.txt", cb2);
//   }
// }

// function cb2(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//     fs.readFile("f3.txt", cb3);
//   }
// }

// function cb3(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//   }
// }

// console.log("After");
