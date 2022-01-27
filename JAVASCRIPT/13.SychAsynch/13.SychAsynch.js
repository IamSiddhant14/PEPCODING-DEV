// Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed. 

const fs = require('fs');

console.log("Before");

let data = fs.readFileSync("f1.txt");

console.log("  "+ data);

console.log("After");



// Asynchronous JavaScript :

console.log("Before");

fs.readFile('f1.txt',cb);

function cb(err , data){

    if(err){
        console.log(err);
        return;
    }

    console.log(" "+data);

}






console.log("  "+ data);

console.log("After");


