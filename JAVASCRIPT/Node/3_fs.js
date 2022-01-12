 






// ****************************** PATH MODULE **************************
const fs= require('fs');
const path = require('path');

let srcFilePath = 'C:\\Users\\Acer\\Desktop\\PROJECTS\\PEPCODING-DEV\\JAVASCRIPT\\Node\\myDirectory\\f1.txt';

let destinationPath = 'C:\\Users\\Acer\\Desktop\\PROJECTS\\PEPCODING-DEV\\JAVASCRIPT\\Node\\myDirectory2';//Destination folder path

let tobecopiedFileName =  path.basename(srcFilePath);
console.log(tobecopiedFileName);//Output is the name of the source file

let destPath = path.join(destinationPath,tobecopiedFileName);
console.log(destPath);   
 
fs.copyFileSync(srcFilePath,destPath);//copy the file at the destination
console.log("File copied"); 

