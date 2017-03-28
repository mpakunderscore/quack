import React, { Component } from "react";
import {View, StatusBar} from 'react-native';
import {MainMap, MainMenu, GameMap, GameMenu} from './js/states'
import {styles} from './js/utils/styles';

let mainMenu = false;

export class Index extends Component {
    render() {

        //TODO
        if (mainMenu)
            return (
                <View style={styles.container}
                      hideNavBar={true}>
                    {/*<StatusBar hidden={true} />*/}
                    <MainMap/>
                    <MainMenu/>
                </View>
            );

        else
            return (
                <View style={styles.container}
                      hideNavBar={true}>
                    {/*<StatusBar hidden={true} />*/}
                    <GameMap/>
                    <GameMenu/>
                </View>
            );
    }
}
