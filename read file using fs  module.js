const fs = require('fs');
// const { isBuffer } = require('util');
// console.log('read start');
// fs.readFile('input.txt','utf-8',function(err,data){
//     if(err){
//         console.log('error:',err);
//         return err;
//     }
//     console.log('data:',data);
//     console.log('read end');
//     return data;
// // })
// console.log('other stuff');
// var  data = fs.readFileSync('input.txt');
// console.log('data',data.toString());
// console.log('read end');
// console.log('other stuff');
// const buf = new Buffer (1024);
// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log('error',err);

//     }
//     console.log("succefully");
//     fs.read(fd,buf,0,buf.length,5,function(er,data){
//     if(err){
//         console.log('err')
//     }
//     console.log(data.toString());
// })
// });
// fs.appendFile('input.txt','--rathore','utf-8',function(err) {
//  if(err){
//     console.log('err')
// }else{
// console.log('suceful');
// }
// })
// fs.unlink('input.txt',function(err){
    
//     if(err){
//         console.log('err')
//     }else{
//     console.log('suceful');
//     }
// });
// const fs module = require('fs');

// const data =
//     "Node.js is an open-source, server-side JavaScript runtime that allows developers to build and execute server-side applications using JavaScript. It's built on the V8 JavaScript engine developed by Google and provides an event-driven, non-blocking I/O model that makes it suitable for building scalable and efficient network applications.Node.js's architecture enables developers to build scalable and performant applications, especially in scenarios where high concurrency and real-time communication are important. It's commonly used for web servers, APIs, real-time applications, microservices, and more.";
 var data =fs.readFileSync('nodejs_architecture.txt');
        
const readData = fs.readFileSync("nodejs_architecture.txt");

console.log('Data:', data.toString());