//CLIENT

import {playSound} from './actions';

import {speakF} from './utils/speech';

import {placeUser} from './map';
import {removeUser} from './map';
import {buildMap} from './map';

// import {Map} from './utils/map';
import SocketIOClient from 'socket.io-client';

//"OS":"ios","Version":"10.2.1"
import {Platform} from 'react-native';

const ip = 'quackserver.herokuapp.com';

const port = 3000;

let socket = SocketIOClient('wss://' + ip);

export let sendSound = function () {
    socket.emit('sound', 'some sound');
};

socket.on('sound', (sound) => {
    playSound();
});

export let sendText = function (text) {
    socket.emit('text', text);
};

socket.on('text', (text) => {
    speakF(text);
});

export let sendLocation = function (region) {
    socket.emit('location', JSON.stringify(region));
};

socket.on('location', (region) => {
    placeUser(JSON.parse(region));
});

export let sendImage = function (image) {
    socket.emit('image', JSON.stringify(image));
};

socket.on('image', (id, image) => {
    setMarkerImage(JSON.parse(id, image));
});

socket.on('map', (map) => {
    buildMap(JSON.parse(map));
});

socket.on('disconnected', (id) => {
    removeUser(id);
});