import React, {Component} from 'react';
import {View, Text, Image, MapView, Alert, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {texts} from './texts'
import {geo} from './geo'
import {sound} from './sound';

// import {socket} from './socket';
import {sendSound} from './socket';

export class MainMap extends Component {
    render() {
        return (
            <MapView
                style={styles.mainMap}
                showsUserLocation={true}
                region={geo.region}
            />
        );
    }
}

export class MainMenu extends Component {
    render() {
        return (
            <View style={styles.mainMenu}>
                <Text style={styles.welcome}>
                    {texts.welcome}
                </Text>
                <Image
                    style={styles.selectAnimal}
                    source={require('./../images/goos11e2.png')}
                />
                <Text style={styles.select}>
                    {texts.ok}
                </Text>
            </View>
        );
    }
}

export class GameMap extends Component {
    render() {
        return (
            <MapView
                style={styles.gameMap}
                showsUserLocation={true}
                region={geo.region}
            />
        );
    }
}

export class GameMenu extends Component {
    render() {
        return (
            <View style={styles.mainMenu}>
                <TouchableOpacity
                    onPress={onButtonPress}
                    style={styles.gameUserTouchable}>
                    <Image
                        style={styles.gameUser}
                        source={require('./../images/goos11e2.png')}
                    />
                </TouchableOpacity>
                <BottomMenu/>
            </View>
        );
    }
}

export class BottomMenu extends Component {
    render() {
        return (
            <View style={styles.userMenu}>
                <Text style={styles.userMenuText}>
                    {texts.items}
                </Text>
                <Text style={styles.userMenuText}>
                    {texts.menu}
                </Text>
            </View>
        );
    }
}

const onButtonPress = () => {

    sendSound();

    // Play the sound with an onEnd callback
    // sound.play((success) => {

        // if (success) {
            // Alert.alert('success');
            // console.log('successfully finished playing');
        // } else {
            // Alert.alert('error');
            // console.log('playback failed due to audio decoding errors');
        // }
    // });
};