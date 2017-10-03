import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

import {styles} from '../styles/styles';
import {texts} from '../utils/texts';

import {selfClick} from '../actions';
import {selectClick} from '../actions';
import {mainMenu} from '../actions';
import {zoom} from '../actions';
import {characters} from '../utils/characters';

export let menu = {};

menu.name = 'goose';
menu.index = 0;

export class Menu extends Component {

    constructor(props) {

        super(props);

        menu.play = () => {
            this.setState({
                main: 'play'
            });
        };

        menu.main = () => {
            this.setState({
                main: 'main'
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

export class MainMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            characters: characters
        };
    }

    render() {
        return (
            <View style={styles.menu}>

                <Text style={styles.welcomeText}>
                    {texts.welcome}
                </Text>

                <Swiper style={styles.swiper}
                        showsButtons={false}
                        showsPagination={false}
                        autoplay={false}
                        index={menu.index}
                        loop={true}
                        autoplayTimeout={1}
                        activeDotColor={"gray"}>

                    {this.state.characters.map((character, index) => (

                        <View style={styles.swiperView}
                              key={character.id}>

                            <TouchableOpacity
                                onPress={() => selectClick(character.name, character.image, index)}>

                                <Image
                                    style={{width: character.width, height: character.height}}
                                    source={character.image}
                                />

                            </TouchableOpacity>

                            <Text style={styles.textData}>
                                {character.data}
                            </Text>

                            <Text style={styles.select}>
                                {character.text}
                            </Text>

                        </View>

                    ))}

                </Swiper>

            </View>
        );
    }
}

let oldY = null;

export class GameMenu extends Component {

    constructor(props) {

        super(props);

        // menu.modal = (val) => {
        //     this.setState({
        //         modal: val
        //     });
        // };

        this.state = {
            image: menu.image
        };
    }

    // onMove(e) {
    //
    //     if (oldY === null) {
    //         oldY = e.nativeEvent.pageY;
    //         return;
    //     }
    //
    //     // zoom(oldY - e.nativeEvent.pageY);
    //
    //     oldY = e.nativeEvent.pageY;
    // }
    //
    // onRelease(e) {
    //
    //     oldY = null;
    // }
    //
    // _onStartShouldSetResponder(e) {
    //     return true;
    // }
    //
    // _onMoveShouldSetResponder(e) {
    //     return true;
    // }

    render() {
        return (
            <View style={styles.gameMenu}
                  pointerEvents={'none'}
                  // onResponderMove={this.onMove}
                  // onResponderRelease={this.onRelease}
                  // onStartShouldSetResponder={this._onStartShouldSetResponder}
                  // onMoveShouldSetResponder={this._onMoveShouldSetResponder}
                >

                <TouchableOpacity
                    onPress={selfClick}
                    onLongPress={mainMenu}
                    pointerEvents={'all'}
                    style={styles.gameUserTouchable}>

                    <Image
                        style={styles.gameUser}
                        source={this.state.image}
                    />

                </TouchableOpacity>

            </View>
        );
    }
}

class Error extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text style={styles.textData}>
                    Error
                </Text>
            </View>
        );
    }
}
