import {Alert} from 'react-native';

let Sound = require('react-native-sound');

// const quack = require('quack.mp3');

// Enable playback in silence mode (iOS only)
// Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
export let sound = new Sound('quack.mp3', Sound.MAIN_BUNDLE, (error) => {

    if (error) {
        Alert.alert('failed');
        console.log('failed to load the sound', error);
        return;
    }

    // loaded successfully
    console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
});

// Reduce the volume by half
sound.setVolume(1.0);

// Position the sound to the full right in a stereo field
// sound.setPan(1);

// Loop indefinitely until stop() is called
// sound.setNumberOfLoops(-1);

// Get properties of the player instance
// console.log('volume: ' + sound.getVolume());
// console.log('pan: ' + sound.getPan());
// console.log('loops: ' + sound.getNumberOfLoops());

// Seek to a specific point in seconds
// sound.setCurrentTime(2.5);

// Get the current playback point in seconds
// sound.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
// sound.pause();

// Stop the sound and rewind to the beginning
// sound.stop();

// Release the audio player resource
// sound.release();
