// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.



//************************************* MAP *********************************

let arr = [2, 5, 9, 8, 15, 11, 6];

// let ans = arr.map(function(v){ , As this function dont need to called some where else
//     return v*v;
// });

//Above one will also work

let ans = arr.map(function square (v){//Here this function is an Call back function
    return v*v;
});

console.log( ans );
console.log( arr );


//map is itseLf a function
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that inside the callback function
//map returns a new array and dont modifie the original array unlike push and pop operation

let nameArr = ['Siddhant','Prakhar','Niru','bhushan','harshita'];
let nameArr1 = nameArr.map(function(v){ //As this function dont need to called some where else

    return v;//Here return statement is important or else when we will try to print this "newArr2" then it will result in an array where all element would be undefined
})

console.log(nameArr1);



let nameArr2 = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja']

let ans1 = nameArr2.map(function(v){
    let a = v.split(" ");
    let Fristname = a[0];
    let lastname = a[1];
    return Fristname+" "+lastname;
})

//Output
// [ 'Vishal Kumar', 'Vaibahv Rawal', 'Anmol Taneja' ]

let ans2 = nameArr2.join("&")
//Output
// Vishal Kumar&Vaibahv Rawal&Anmol Taneja

console.log(ans1);
console.log(ans2);