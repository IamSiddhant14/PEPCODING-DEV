const path = require('path');

// To determine extension of the file
let ext = path.extname(' C:\\Users\\Acer\\Desktop\\PROJECTS\\PEPCODING-DEV\\JAVASCRIPT\\Node\\f2.txt');

console.log(ext);

let basename = path.basename('C:\\Users\\Acer\\Desktop\\PROJECTS\\PEPCODING-DEV\\JAVASCRIPT\\Node\myDirectory2\\f1.txt');
console.log('basename '+basename);


console.log(__dirname);//This gives you the directory name which you are in
console.log(__filename);//This gives you the file name which you are in


