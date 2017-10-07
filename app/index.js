import React, { Component } from 'react';

import {View, StatusBar} from 'react-native';

import {Map} from './js/view/map';
import {map} from './js/view/map';

import {Menu} from './js/view/menu';
import {menu} from './js/view/menu';

import {Modal} from './js/view/modal';
import {modal} from './js/view/modal';

import {styles} from './js/styles/styles';

export class Index extends Component {

    render() {
            return (
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        translucent
                    />
                    <Map/>
                    <Menu/>
                    <Modal/>
                </View>
            )
    }
}

export function play() {
    menu.play();
}

export function main() {
    menu.main();
}


