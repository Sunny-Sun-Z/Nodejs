
//1. simple sample
// function sayHello(name ){
//     console.log(`hello ${name}`);
// }

// sayHello("Shufang")

//2. simple logger:
const logger = require('./logger.js')

//logger.log("hi")
//Optionally, if there is only 1 funtion:
logger("hi shufang");

//3. https://nodejs.org/en  > doc > latest api
//3.1 path

const path = require("path");

var pathInfo = path.parse(__filename);
console.log(pathInfo);

//3.2 OS

const os = require("os")
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`total: ${totalMemory}`);
console.log(`free: ${freeMemory}`);

//3.3 fileSystem.

const fs = require("fs");
const files = fs.readdirSync('./');

console.log("files", files)

fs.readdirSync('./', (err, files) => {
    //fs.readdirSync ('.s', (err, files)=>{  //here we give an invalid path.
    if (err) console.log('Error', err);
    else console.log('result', files);
})

//3.4 event


//const EventEmitter = require("events");
//const emitter = new EventEmitter();

//3.4.1
// emitter.on('messagelogged', ()=>{
//     console.log('listener called');
// })
// emitter.emit('messagelogged');

//3.4.2
// emitter.on('messagelogged', (arg)=>{
//     console.log(arg);
// })

// emitter.emit('messagelogged', {id: 1, url:'http://'})

//3.4.3: not working without in a class

const Logger = require('./loggerClass');
const loggerClass = new Logger();
loggerClass.on('m', (arg) => {            //here the 2 args are same as the loggerClass emit's
    console.log("Listener called", arg);
})

//emitter.emit('messagelogged', {id: 1, url:'http://'})


loggerClass.log("message111");

//3.4.5: with class   