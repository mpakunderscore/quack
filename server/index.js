//SERVER

let express = require('express');
let http = require('http');
let socketio = require('socket.io');

let app = express();
let server = http.Server(app);
let websocket = socketio(server);

let port = 3000;

server.listen(port, () => console.log('listening: ' + port));

websocket.on('connection', (socket) => {

    console.log('client: ' + socket.id);

    //Send map here
    let map = 'map';
    socket.emit('map', map);

    socket.on('sound', (message) => receiveSound(socket, message));
});

function receiveSound(socket, message) {

    console.log('sound from : ' + socket.id);

    // socket.emit('sound', '');
    socket.broadcast.emit('sound', '');
}