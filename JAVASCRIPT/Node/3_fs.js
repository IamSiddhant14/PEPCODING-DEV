// File System Module

// Help us performing various opertions(read , write , update , delete ) with file and directories

const fs = require('fs');

// 1. We will be reading writing updating and deleting files

let content = fs.readFileSync('f1.txt');
console.log('Data from text file --> '+ content);//To avoid buffer data use concate opertion with string

//Writing to a file

fs.writeFileSync('f2.txt', 'This data will be written on f2');//If a file does not exist then a new file will be created by this name

// Append/update file
// This adds data to the previsouly present file
fs.appendFileSync('f2.txt','This is the new data');

//Deleting a file

// fs.unlinkSync('f2.txt');
// console.log('F2 Deleted');

//********************************************************Directories**********************************************************//

//Make directory
// fs.mkdirSync('myDirectory');
// console.log('Directory Created');

//Delete a directory
// fs.rmdirSync('myDirectory');
// console.log('Directory removed');

//TO check whether a directory exist or not
// existSync

let doesExist=  fs.existsSync('myDirectory'); 
console.log(doesExist);

let statsofDirctory = fs.lstatSync('myDirectory');
console.log(statsofDirctory);

console.log('isFile ?',statsofDirctory.isFile());

console.log('isDirectory ?',statsofDirctory.isDirectory());

 let folderpath = 'C:\\Users\\Acer\\Desktop\\PROJECTS\\PEPCODING-DEV\\JAVASCRIPT\\Node\\myDirectory';//Here the "\\" is really important in node js

 let foldercontent = fs.readdirSync( folderpath);
 console.log("directory content  "+ foldercontent);//Lists out the contents/files present in the directory
 
