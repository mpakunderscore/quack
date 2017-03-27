let express = require('express');
let http = require('http');
let socketio = require('socket.io');

let app = express();
let server = http.Server(app);
let websocket = socketio(server);

let port = 3000;

server.listen(port, () => console.log('Listening: ' + port));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {

    console.log('Client: ' + socket.id);
    socket.on('sound', (message) => receiveSound(socket, message));
});

function receiveSound(socket, message) {

    console.log('Sound: ', message);
    socket.emit('sound', 'some sound from server');
    socket.broadcast.emit('sound', 'some sound from server broadcast');
}