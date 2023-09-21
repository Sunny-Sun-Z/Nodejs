//1. listen to port 3000

//const httpClient = require ('http');

//const server = httpClient.createServer();

// server.on('connection', (socket)=>{
//     console.log('socket:');
// });
//server.listen(3000);

//console.log('Listening on port 3000...');

//2. request and response

const httpClient = require ('http');

const server = new httpClient.createServer((request, response)=>{
    if(request.url == '/')
    {
        response.write('hello Shufang');
        response.end();
    }
    else if (request.url === '/api/course')
    {
        data = JSON.stringify(['Math','English','Computer Science']);
        response.write( JSON.stringify(['Math','English','Computer Science']));
        response.end();
    }
    
    
})

server.listen (3000);
//console.log('Listening on port 3000...');