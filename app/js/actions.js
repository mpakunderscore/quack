import {sound} from './utils/sound'

import {sendSound} from './client';

import {play} from './../index';

export const selfClick = () => {

    sendSound();

    // playSound();
};

export const selectClick = () => {

    play();
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
