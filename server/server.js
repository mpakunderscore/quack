//SERVER

let express = require('express');
let http = require('http');
let socketio = require('socket.io');

let app = express();
let server = http.Server(app);
let websocket = socketio(server);

let port = 3000;

let map = {
    users: []
};

server.listen(port, () => console.log('listening: ' + port));

websocket.on('connection', (socket) => {

    console.log('client: ' + socket.id);

    //Send map here
    console.log('map');
    console.log(map);

    socket.emit('map', JSON.stringify(map));

    socket.on('sound', (message) => receiveSound(socket, message));
    socket.on('location', (region) => receiveLocation(socket, region));
    socket.on('disconnect', () => removeUser(socket));
});

function removeUser(socket) {

    console.log('disconnect: ' + socket.id);

    // map.users.remove(socket.id);

    // socket.broadcast.emit('disconnect', socket.id);
}

function receiveSound(socket, message) {

    console.log('sound from: ' + socket.id + ' ' + message);

    socket.broadcast.emit('sound', '');
}

function receiveLocation(socket, region) {

    region = JSON.parse(region);

    console.log('location ' + JSON.stringify(region) + ' from: ' + socket.id);

    region.id = socket.id;

    let place = map.users.place(region);

    if (place > -1)
        map.users[place] = region;

    else
        map.users.push(region);

    socket.broadcast.emit('location', JSON.stringify(region));
}


Array.prototype.place = function(obj) {

    let i = this.length;
    while (i--) {

        if (this[i].id == obj.id) {
            return i;
        }
    }
    return -1;
};

Array.prototype.remove = function(id) {

    let i = this.length;
    while (i--) {

        if (this[i].id == id) {
            this.splice(i, 1);
        }
    }
};