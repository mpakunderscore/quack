import {sendSound} from './socket';
import {sound} from './utils/sound'

export const selfClick = () => {

    sendSound();

    playSound();
};

function playSound() {

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

