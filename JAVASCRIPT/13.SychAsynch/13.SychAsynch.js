// Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed. 

const fs = require('fs');

console.log("Before");

let data = fs.readFileSync("f1.txt");

console.log("  "+ data);

console.log("After");


console.log("*****************************************************************");



// Asynchronous JavaScript :

// CALL STACK
// NODE API LIST
// CALLBACK QUEUE
// EVENT LOOP



//while Executing a JavaScript code Every line which is executed from top to bottom while running the code Every single line is been frist pushed into the call stack from where it is decided whether it will be  run in the real time or it would be sent to the node API in case of encounter with an asynchronous function, From the node API stack as soon as the asynchronous functions complets it task it is been sent to the callback queue  from where on the basis of whether the call stack is empty or not It is been sent for execution To determine whether the call stack is empty or not and event loop is been used Whose function is to determine whether there is something executing in the call stack or not if nothing is being currently executed in the call stack then the async functions are being put into the call stack for execution

//https://zoom.us/rec/play/eFxPpdklkSL_siSXWFJ_ZHpzwMLQFRSaKzZKrEzFizqCwGj3QdYiD-Mk24sY65smfSyMWLNhADRGzaDo.sPl6aDtds3Xw3Mwp?continueMode=true&_x_zm_rtaid=gNxsK26lRo-lOyJOF2V31w.1643282174435.3b9fd5c8d68d52935b52e89ed07e591b&_x_zm_rhtaid=79  (If confused)

console.log("Before");

fs.readFile('f2.txt',cb);

function cb(err , data){

    if(err){
        console.log(err);
        return;
    }

    console.log(" "+data);

}

console.log("  "+ data);

console.log("After");



