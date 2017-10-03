//view controller

import {sound} from './utils/sound';

import {speakF} from './utils/speech';

import {sendSound} from './client';

import {sendText} from './client';

import {play} from './../index';

import {main} from './../index';

// import {setDuck} from './menu';

import {sendImage} from './client';

import {Alert} from 'react-native';

import {map} from './view/map';

import {menu} from './view/menu';

import {modal} from './view/modal';

//MAIN MENU
export const selectClick = (name, image, index) => {

    // Alert.alert('selectClick')

    menu.name = name;
    menu.image = image;
    menu.index = index;

    if (name === "cyber") {

        // menu.modal(true);

        modal.show();

    } else {

        play();
        sendImage(name);
    }
};

//IN GAME
export const selfClick = () => {

    if (menu.name === "goose") {
    }

    if (menu.name === "cyber") {

        // menu.modal(true);
        // menu.edit = true;

    } else {

        sendSound();
        playSound();
    }
};


export const markClick = () => {
    modal.show();
}


export const speak = (text) => {

    sendText(text);
    speakF(text)
    // let text = "Проверка"
}



export const menuClick = () => {

    // menu.modal(true)
};

export const closeModal = () => {
    // menu.modal(false)
    modal.hide();
};

export function itemsClick() {
}

export const mainMenu = () => {
    main();
};

export const alert = () => {
    // Alert.alert('Alert')
};

export function playSound() {

    //TODO move out
    // Play the sound with an onEnd callback
    sound.play((success) => {

        if (success) {

            // Alert.alert('success');
            console.log('successfully finished playing');
        } else {
            // Alert.alert('error');
            console.log('playback failed due to audio decoding errors');
        }
    });
}

//TODO move out
export function zoom(y) {

    let bias = 0;

    if (y > 0)
        bias = 1.05;

    else
        bias = 0.95;

    map.zoom(bias)
}



