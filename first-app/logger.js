var url = 'http://mylogger.io/log';
const EventEmitter = require("events");
const emitter = new EventEmitter();


function log (message){
    console.log(message);    
    emitter.emit('messagelogged', {id: 1, url:'http://'})
}

//module.exports.log = log;

//if there is only one function in the module, directly export it:

module.exports = log;