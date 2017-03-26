import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, MapView} from 'react-native';

export default class AbstractForest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Text style={styles.welcome}>
                        {welcome}
                    </Text>
                    <Image
                        style={styles.animal}
                        source={require('./img/duck.png')}
                    />
                    <Text style={styles.select}>
                        {ok}
                    </Text>
                </View>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    region={region}
                />
            </View>
        );
    }
}

let region = {
    latitude: 59.9538,
    longitude: 30.3275,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
};

let font = "Chalkduster";

let welcome = "Choose your animal";

let ok = " Quack";
//Rrrr...,

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menu: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        opacity: 1.0,
        // opacity: 0.5,
        zIndex: 2
    },
    welcome: {
        fontFamily: font,
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        fontSize: 30,
        textAlign: 'center',
        margin: 50
    },
    animal: {

        // top: 0, left: 0, right: 0, bottom: 0,
        // justifyContent: 'center', alignItems: 'center',
        width: 200,
        height: 230,
        // backgroundColor: 'green'
    },
    select: {
        fontFamily: font,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 50,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        fontSize: 30,
        textAlign: 'center',
        margin: 50
    },
    map: {
        // position: 'absolute',
        flex: 1,
        // position: 'absolute', left: 0, right: 0, bottom: 0,
        opacity: 0.2,
        zIndex: 1
    },
});

AppRegistry.registerComponent('abstractforest', () => AbstractForest);
