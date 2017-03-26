import {MainMap, MainMenu, GameMap, GameMenu} from './app/states'

import {styles} from './app/styles';

import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, MapView} from 'react-native';

let mainMenu = false;

export default class AbstractForest extends Component {
    render() {

        if (mainMenu)
            return (
                <View style={styles.container}>
                    <MainMap/>
                    <MainMenu/>
                </View>
            );

        else
            return (
                <View style={styles.container}>
                    <GameMap/>
                    <GameMenu/>
                </View>
            );
    }
}

AppRegistry.registerComponent('abstractforest', () => AbstractForest);
