import React, { Component } from "react";
import {View, StatusBar} from 'react-native';
import {MainMap, MainMenu, GameMap, GameMenu} from './js/view'
import {styles} from './js/utils/styles';

let mainMenu = false;

export class Index extends Component {
    render() {

        //TODO shut the fuck up about this peace of code, i'l redo it later
        //android cannot just hide nav. bar
        //states here will be

        if (mainMenu)
            return (
                <View style={styles.container}>
                      {/*hideNavBar={true}*/}
                    {/*<StatusBar hidden={true} />*/}
                    <MainMap/>
                    <MainMenu/>
                </View>
            );

        else
            return (
                <View style={styles.container}>
                      {/*hideNavBar={true}*/}
                    {/*<StatusBar hidden={true} />*/}
                    <GameMap/>
                    <GameMenu/>
                </View>
            );
    }
}
