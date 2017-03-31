import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';

import {Map} from './utils/map';

import {styles} from './utils/styles';
import {texts} from './utils/texts';
import {images} from './utils/images';

import {selfClick} from './actions';

export function placeUser(region) {
    Map.placeUser(region)
}

export class MainMap extends Component {
    render() {
        return (
            <Map/>
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
                    source={images.goose}
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
            <Map/>
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
                        source={images.goose}
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