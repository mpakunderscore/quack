
//CLIENT

// import {playSound} from './actions';
//
// import {placeUser} from './map';
// import {removeUser} from './map';
// import {buildMap} from './map';

// import {Map} from './utils/map';
// import SocketIOClient from 'socket.io-client';

//"OS":"ios","Version":"10.2.1"
// import {Platform} from 'react-native';

// let io = require('socket.io')(http);

const ip = '92.61.69.168';

const port = 3000;

// let socket = SocketIOClient('http://' + ip + ':' + port);

let socket = io('http://' + ip + ':' + port);
// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

// export let sendSound = function () {
//     socket.emit('sound', 'some sound');
// };

// export let sendLocation = function (region) {
//     socket.emit('location', JSON.stringify(region));
// };

socket.on('sound', (message) => {
    // playSound();
});

socket.on('map', (map) => {
    buildWebMap(JSON.parse(map));
});

socket.on('location', (region) => {
    placeUser(JSON.parse(region));
});

socket.on('disconnected', (id) => {
    removeUser(id);
});