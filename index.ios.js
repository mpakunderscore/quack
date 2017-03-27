import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

import {MainMap, MainMenu, GameMap, GameMenu} from './app/js/states'

import {styles} from './app/js/styles';

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
