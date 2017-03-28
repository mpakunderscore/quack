//CLIENT

import {playSound} from './actions';
import SocketIOClient from 'socket.io-client';

let socket = SocketIOClient('http://192.168.1.47:3000');

export let sendSound = function () {
    socket.emit('sound', 'some sound');
};

socket.on('sound', (message) => {
    // Alert.alert(message);
    playSound();
});

socket.on('map', (map) => {

    //TODO map here
    // Alert.alert(map);
    // buildMap(map);
});