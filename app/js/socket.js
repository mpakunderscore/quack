//CLIENT

import {Alert} from 'react-native';
import SocketIOClient from 'socket.io-client';

let socket = SocketIOClient('http://localhost:3000');

export let sendSound = function () {
    socket.emit('sound', 'some sound');
};

socket.on('sound', (message) => {
    Alert.alert(message);
});

socket.on('map', (map) => {

    //TODO map here
    // Alert.alert(map);
    // buildMap(map);
});