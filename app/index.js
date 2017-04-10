import React, { Component } from 'react';

import {View} from 'react-native';

import {Map} from './js/utils/map';

import {MainMenu} from './js/view';
import {GameMenu} from './js/view';
import {Error} from './js/view';

import {styles} from './js/styles/styles';

let index = {};

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

export class Menu extends Component {

    constructor(props) {

        super(props);

        index.play = () => {
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

    styles.map.opacity = 1.0;

    index.play();
}

