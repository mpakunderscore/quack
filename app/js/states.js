import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

import {styles} from './utils/styles';
import {texts} from './utils/texts'
import {geo} from './utils/geo'

import {selfClick} from './actions';

export class MainMap extends Component {
    render() {
        return (
            <MapView
                style={styles.gameMap}
                initialRegion={geo.region}
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
                initialRegion={geo.region}
            />
        );
    }
}

export class GameMenu extends Component {
    render() {
        return (
            <View style={styles.mainMenu}>
                <TouchableOpacity
                    onPress={selfClick}
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