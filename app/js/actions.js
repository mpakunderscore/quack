//view controller

import {sound} from './utils/sound';

import {speakF} from './utils/speech';

import {sendSound} from './client';

import {sendText} from './client';

import {play} from './../index';

import {main} from './../index';

// import {setDuck} from './menu';

import {Alert} from 'react-native';

import {map} from './map';

import {menu} from './menu';

export const selfClick = () => {

    if (menu.id === "goose") {

        sendSound();
        playSound();
    }

    if (menu.id === "cyber") {
        menu.modal(true);
        menu.edit = true;
    }
};

export const speak = (text) => {

    sendText(text);
    speakF(text)
    // let text = "Проверка"
}

export const selectClick = (image, id, index) => {

    // Alert.alert('selectClick')

    menu.id = id;
    menu.index = index;

    play(image);
}

export const menuClick = () => {

    // Alert.alert('selectClick')

    // Alert.alert('Menu')

    menu.modal(true)
};

export const closeModal = () => {
    menu.modal(false)
};

export function itemsClick() {

    // Alert.alert('selectClick')

    // Alert.alert('Items')
}

export const mainMenu = () => {

    // Alert.alert('selectClick')

    main();
};

export const alert = () => {

    Alert.alert('Alert')
};

export function playSound() {

    // Play the sound with an onEnd callback
    sound.play((success) => {

        // if (success) {
        // Alert.alert('success');
        // console.log('successfully finished playing');
        // } else {
        // Alert.alert('error');
        // console.log('playback failed due to audio decoding errors');
        // }
    });
}

// export function moveOut(x) {
//     map.moveOut(x);
// }
//
// export function moveIn() {
//     map.moveIn();
// }

export function zoom(y) {

    let bias = 0;

    // Alert.alert(y + '')

    if (y > 0)
        bias = 1.05;

    else
        bias = 0.95;

    map.zoom(bias)
}



