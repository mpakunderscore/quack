import SocketIOClient from 'socket.io-client';
import {View, Text, Image, MapView, Alert, TouchableOpacity} from 'react-native';

let socket = SocketIOClient('http://localhost:3000');

export let sendSound = function () {
    socket.emit('sound', 'text1');
};

socket.on('sound', (message) => {
    Alert.alert(message);
});