let express = require('express');
let socketio = require('socket.io');
let http = require('http');

let app = express();
let server = http.Server(app);
let websocket = socketio(server);

const socketPort = 3000;

let map = {
    users: {},
    places: []
};

exports.run = function () {

    server.listen(socketPort, () => console.log('Socket listening on: ' + socketPort));

    websocket.on('connection', (socket) => {

        console.log('connect: ' + socket.id);

        // console.log(map);

        socket.emit('map', JSON.stringify(map));

        socket.on('sound', (message) => receiveSound(socket, message));
        socket.on('location', (region) => receiveLocation(socket, region));
        socket.on('disconnect', () => removeUser(socket));
    });
}

function removeUser(socket) {

    console.log('disconnected: ' + socket.id);

    delete map.users[socket.id];

    socket.broadcast.emit('disconnected', socket.id);
}

function receiveSound(socket, message) {

    console.log('sound from: ' + socket.id + ' ' + message);

    socket.broadcast.emit('sound', '');
}

function receiveLocation(socket, region) {

    region = JSON.parse(region);

    console.log('location ' + JSON.stringify(region) + ' from: ' + socket.id);

    region.id = socket.id;

    region.time = new Date().getTime();

    // let place = map.users.place(region);
    //
    // if (place > -1)
    //     map.users[place] = region;
    //
    // else
    //     map.users.push(region);

    map.users[region.id] = region;

    socket.broadcast.emit('location', JSON.stringify(region));
}

// function checkUsers() {
//
//     for (let i = 0; i < map.users.length; i++) {
//
//         if (map.users[i].time < new Date().getTime() - 60000) {
//
//             console.log('remove user: ' + map.users[i].id);
//             map.users.splice(i, 1);
//         }
//     }
//
//     setTimeout(checkUsers, 5000);
// }
//
// setTimeout(checkUsers, 5000);

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