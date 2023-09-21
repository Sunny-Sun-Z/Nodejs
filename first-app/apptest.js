// const LoggerTest = require('./loggertest');
// const logger = new LoggerTest();

const { EventEmitter } = require("./loggerClass");
const LoggerNew = require("./loggertest");
const LoggerTest = require("./loggertest");

// logger.on ('m', (arg)=>{
//     console.log('Listener called:', arg);
// })

// logger.log('message1');




// const logger = new LoggerTest();

// logger.on('m', (arg)=>{
//     console.log('xxxx', arg);
// })

// logger.log("this is the message sent.");





// const logger = new LoggerTest();

// logger.on ('m', (arg)=>{
//     console.log('yyy', arg);
// })

// logger.log("this is the message");


// const logger = new LoggerTest();

// logger.on ('m', (arg)=>
//     {
//         console.log('zzz', arg);
//     }
// )

// logger.log("log messages");


// const logger = new LoggerNew ();

// logger.on('m', (arg)=>{
//     console.log('kkk', arg);
// })

// logger.log('this is the new messagesss.')



const logger = new LoggerNew();

// register the event
logger.on ('msg', (arg)=>{
    console.log('arg value:', arg);
})

//raise an event
logger.log("this is the message will be console logged from the log function.");










