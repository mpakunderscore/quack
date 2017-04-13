import React, { Component } from 'react';

import {View} from 'react-native';

import {Map} from './js/map';
import {map} from './js/map';

import {MainMenu} from './js/view';
import {GameMenu} from './js/view';
import {Error} from './js/view';

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

let menu = {};

export class Menu extends Component {

    constructor(props) {

        super(props);

        menu.play = () => {
            this.setState({
                main: 'play'
            });
        };

        this.state = {
            main: 'main'
        };

        this.getMain = this.getMain.bind(this);
    }

    getMain() {
        return this.state.main;
    }

    render() {

        if (this.getMain() === 'main')
            return (<MainMenu/>);

        else if (this.getMain() === 'play')
            return (<GameMenu/>);

        else
            return (<Error/>);
    }
}

export function play() {

    menu.play();
    map.play();
}

