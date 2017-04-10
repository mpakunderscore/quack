import React, { Component } from "react";

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
                    <Map style={styles.map}/>
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
                main: "play"
            });
        };

        index.state = () => {
            this.getMain();
        };

        this.state = {
            main: "main"
        };

        this.getMain = this.getMain.bind(this);
    }

    getMain() {
        return this.state.main;
    }

    render() {

        if (this.getMain() === "main")
            return (<MainMenu/>);

        else if (this.getMain() === "play")
            return (<GameMenu/>);

        else
            return (<Error/>);
    }
}

export function play() {
    index.play();
}

export function state() {

    let state = index.state();

    if (state == null)
        return "main";
}

