// Callback function - any function that is passed as an argument to another function is known as a callback function

function printFristName(fristName , cb , cb1){

    console.log(fristName);

    cb("Sharma");
    cb1(21);

}

function printLastName(lastname){
    console.log(lastname);
}

function printAge(age){
    console.log(age);
}


printFristName("Siddhant" , printLastName , printAge);
// Here we are passing the entire function body as a argument then we are passing the parameter to that function which is been passed

