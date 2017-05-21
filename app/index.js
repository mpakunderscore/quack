import React, { Component } from 'react';

import {View} from 'react-native';

import {Map} from './js/map';
import {map} from './js/map';

import {Menu} from './js/menu';
import {menu} from './js/menu';

import {styles} from './js/styles/styles';

export class Index extends Component {

    render() {
            return (
                <View style={styles.container}>
                    <Map/>
                    <Menu/>
                </View>
            )
    }
}

export function play(image) {

    menu.image = image;

    menu.play();
    map.play();
}

export function main() {

    menu.main();
    map.main();
}

menu.setImage = (image) => {
    this.setState({
        image: image
    });
};



