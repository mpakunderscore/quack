let Speech = require('react-native-speech');

export function speakF (text) {
    Speech.speak({
        text: text,
        voice: 'ru-RU'
    });
}

