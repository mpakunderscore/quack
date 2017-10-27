import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

import {styles} from '../styles/styles';
import {texts} from '../utils/texts';

// import {selfClick} from '../actions';
import {mainMenu, selectClick} from '../actions';

import {playSound} from '../actions';
// import {zoom} from '../actions';
import {characters} from '../utils/characters';
import {centerMap} from './map';

export let menu = {};

//current icon in map and menu index
menu.name = 'goose';
menu.index = 1;

//TODO
export let user = {
    title: "Place your name here",
    description: "And some text below, so if someone click on your icon - this text will shows up"
};


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
                                onPress={() => selectClick(character.id, character.name, character.image, index)}>

                                <Image
                                    style={{width: character.width, height: character.height}}
                                    source={character.image}
                                />

                            </TouchableOpacity>

                            <Text style={styles.textData}>
                                {character.data}
                            </Text>

                            <TouchableOpacity style={styles.select} onPress={playSound}>
                                <Text style={styles.anyText}>
                                    {character.text}
                                </Text>
                            </TouchableOpacity>

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
            <View style={styles.gameMenu}>

                <TouchableOpacity pointerEvents={'auto'} onPress={centerMap}>
                    <Text style={styles.gameMenuText}>
                        Center
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity pointerEvents={'auto'} onPress={playSound}>
                    <Text style={styles.gameMenuText}>
                        Quack
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity pointerEvents={'auto'} onPress={mainMenu}>
                    <Text style={styles.gameMenuText}>
                        Menu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity pointerEvents={'auto'} onPress={mainMenu}>
                    <Text style={styles.gameMenuText}>
                        Select
                    </Text>
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
