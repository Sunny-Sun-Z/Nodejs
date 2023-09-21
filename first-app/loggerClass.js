var url = 'http://mylogger.io/log';
const EventEmitter = require("events");
//const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('m', { id: 1, url: 'http://' })
    }  
}
module.exports = Logger;
