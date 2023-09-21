// const EventEmitter = require('events');

// class LoggerTest extends EventEmitter {
//     log (message){
//         console.log(message);
//         this.emit ('m', {id:1, url:'http://'});
//     }
// }
// //console.log('111',log)
// module.exports = LoggerTest; 

// const EventEmitter = require('events');

// class LoggerTest extends EventEmitter {
//     log(message)
//     {
//         console.log(message);
//         this.emit ('m', {id:1, url: 'http://'});
//     }
// }

// module.exports = LoggerTest;


// const EventEmitter = require('events');

// class LoggerTest extends EventEmitter {
//     log(message){
//         console.log(message);
//         this.emit('m', {id:1, url: "http://"});
//     }
// }

// module.exports = LoggerTest;


// const EventEmit = require ('events');

// class LoggerNew extends EventEmit {
//     log(message){
//         console.log(message);
//         this.emit('m', {id:1, url:'http://'});
//     }
// }

// module.exports = LoggerNew;


// const EventEmitter = require ('events');
// class LoggerNew extends EventEmitter {
//     log(message){
//         console.log(message);
//         this.emit('m', {id: 1, url:'http://', success:true})
//     }

// } 

// module.exports = LoggerNew;


const Logger = require ('events');

class LoggerNew extends Logger {
    log (message){
        console.log(message);
        this.emit ('msg', {id:1, firstname: 'shufang', lastname: 'sun'});
    }
}

module.exports = LoggerNew;

