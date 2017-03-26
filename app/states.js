import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, MapView} from 'react-native';

import {styles} from './styles';
import {texts} from './texts'
import {geo} from './geo'

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
                    source={require('./images/goos11e2.png')}
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
                <Image
                    style={styles.gameUser}
                    source={require('./images/goos11e2.png')}
                />
                <UserMenu/>
            </View>
        );
    }
}

export class UserMenu extends Component {
    render() {
        return (
            <View style={styles.userMenu}>
                <Text style={styles.userMenuText}>
                    {texts.items}
                </Text>
                {/*<Text style={styles.userMenuText}>*/}
                {/*{texts.ok}*/}
                {/*</Text>*/}
                <Text style={styles.userMenuText}>
                    {texts.menu}
                </Text>
            </View>
        );
    }
}