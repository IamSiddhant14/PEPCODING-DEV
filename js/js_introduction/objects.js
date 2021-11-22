//Objects - They exist in key value pair 
//key value collectively is know as property
//keys are by default string if written in double quotes or not in object

let obj ={};

let cap ={
    fristname : 'Siddhant',//string
    lastname : "sharma",//string
    friends : [ 'Siddhant-55', 'no-one'], //string
    placedatgoodpbc : true, //Boolean
    age: 21, //integer
    placedatsbc : true,
    address : {
        country : 'canada', //string
        city : 'Toronto' //string
    },

    rich : function rich(){  //function
        console.log("1.5 cr per year pacakage"); 
    }
}

// if in case the name of the variable is invaild or in case we are accessing the prop of the object dynamically then we are suppose to ue only square bracket notation only and dot notation will give a error in this case

// adding prop to object
cap.awesomeLife = true ;

// updating value of object 
cap.placedatsbc =  false ;

//delete a prop
delete cap.placedatsbc ;

console.log(cap);
console.log(cap.friends);
console.log(cap['friends']);
console.log(cap['friends'][0]);
cap.rich();


//Here everything which is written inside bracket should be in semicolons expect integers


//Applying loop on a object (for-in loop)  :::::


for( let key in cap){
    console.log(key , cap[key]);
}
