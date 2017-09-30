//CLIENT

import {playSound} from './actions';

import {speakF} from './utils/speech';

import {placeUser} from './view/map';
import {changeUserImage} from './view/map';
import {removeUser} from './view/map';
import {buildMap} from './view/map';

import {menu} from './view/menu';

// import {Map} from './utils/map';
import SocketIOClient from 'socket.io-client';

//"OS":"ios","Version":"10.2.1"
// import {Platform} from 'react-native';

const port = 3000;

const ip = 'wss://' + 'duck.city';
// const ip = 'http://92.61.69.168:' + port;

let socket = SocketIOClient(ip);

export let sendSound = function () {
    socket.emit('sound', 'some sound');
};

export let sendText = function (text) {
    socket.emit('text', text);
};

export let sendLocation = function (region) {

    region.name = menu.name;
    region.back = 'day';
    region.debug = 'true';

    socket.emit('location', JSON.stringify(region));
};

export let sendImage = function (name) {
    socket.emit('image', JSON.stringify({name: name}));
};

socket.on('duck', (duck) => {

    console.log("socket duck");

    // console.log(JSON.parse(duck));

    // map.npc.push(JSON.parse(duck));

    placeUser(JSON.parse(duck));
});

socket.on('sound', (sound) => {
    playSound();
});

socket.on('text', (text) => {
    speakF(text);
});


socket.on('location', (region) => {
    placeUser(JSON.parse(region));
});


socket.on('image', (id, name) => {
    // changeUserImage(JSON.parse(id, name));
});

socket.on('map', (map) => {
    buildMap(JSON.parse(map));
});

socket.on('disconnected', (id) => {
    removeUser(id);
});