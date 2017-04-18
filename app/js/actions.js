//view controller

import {sound} from './utils/sound';

import {sendSound} from './client';

import {play} from './../index';

import {Alert} from 'react-native';

import {map} from './map';

export const selfClick = () => {

    sendSound();

    // playSound();
};

export const selectClick = () => {

    // Alert.alert('selectClick')

    play();
};

export function menuClick() {

    // Alert.alert('selectClick')

    Alert.alert('Menu')
};

export function itemsClick() {

    // Alert.alert('selectClick')

    Alert.alert('Items')
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

export function moveOut(x) {
    map.moveOut(x);
}

export function moveIn() {
    map.moveIn(delta);
}

