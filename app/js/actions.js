//view controller

import {sound} from './utils/sound';

import {play} from './../index';

import {main} from './../index';

import {sendImage} from './client';

import {Alert} from 'react-native';

import {map} from './view/map';

import {menu} from './view/menu';

import {user} from './view/menu';

import {modal} from './view/modal';

//MAIN MENU
export const selectClick = (id, name, image, index) => {

    // Alert.alert('selectClick')

    menu.name = name;
    menu.image = image;
    menu.index = index;

    if (id === "settings") {

        // menu.modal(true);

        modal.show(user, true);

        // play();
        // sendImage(name);

    } else if (id === "new") {

        let init = {title: "Click and add title", description: "And some description if you want. This one will be static duck on map."};

        modal.show(init, true);

    } else {

        play();
        sendImage(name);
    }

    // map.setUser({id: "self", region: {}, name: menu.name});
};

//GAME
export const markClick = (marker) => {

    // Alert.alert(marker.id)

    if (marker.id === "self") {

        mainMenu()

    } else {

        modal.show(marker, false);
    }


};

export const closeModal = () => {
    modal.hide();
};

export const mainMenu = () => {
    main();
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

