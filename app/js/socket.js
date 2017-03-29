//CLIENT

import {playSound} from './actions';
import SocketIOClient from 'socket.io-client';

const ip = '92.61.69.168';

const port = 3000;

let socket = SocketIOClient('http://' + ip + ':' + port);

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