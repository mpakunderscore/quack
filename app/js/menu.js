import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

import {Modal} from './utils/modal';

import {styles} from './styles/styles';
import {texts} from './utils/texts';
import {images} from './utils/images';

import {selfClick} from './actions';
import {selectClick} from './actions';
import {itemsClick} from './actions';
import {menuClick} from './actions';
import {closeModal} from './actions';
// import {moveOut} from './actions';
// import {moveIn} from './actions';
import {zoom} from './actions';

export let menu = {};

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
            characters: [
                {
                    image: images.goose,
                    id: "goose",
                    width: 220,
                    height: 220,
                    text: "Quack"
                },
                {
                    image: images.cyber,
                    id: "cyber",
                    width: 220,
                    height: 220,
                    text: "Cyber"
                },
                // {
                //     image: images.warrior,
                //     id: "warrior",
                //     width: 200*1.2,
                //     height: 240*1.2,
                //     text: "ARRRR!!!"
                // },
                // {
                //     image: images.bomb,
                //     id: "bomb",
                //     width: 100,
                //     height: 100,
                //     text: "BOM!"
                // },
                // {
                //     image: images.spider,
                //     id: "spider",
                //     width: 132*1.4,
                //     height: 90*1.4,
                //     text: "Man"
                // },
                // {
                //     image: images.skeleton,
                //     id: "skeleton",
                //     width: 150*1.2,
                //     height: 150*1.2,
                //     text: "Supporting"
                // },
            ]
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
                        autoplay={false}>

                    {this.state.characters.map(character => (

                        <View style={styles.swiperView}
                              key={character.id}>

                            <TouchableOpacity
                                onPress={selectClick}>
                                <Image
                                    style={{width: character.width, height: character.height}}
                                    source={character.image}
                                />
                            </TouchableOpacity>

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

        menu.modal = (val) => {
            this.setState({
                modal: val
            });
        };

        this.state = {
            modal: false
        };
    }

    onMove(e) {

        if (oldY === null) {
            oldY = e.nativeEvent.pageY;
            return;
        }

        zoom(oldY - e.nativeEvent.pageY);

        oldY = e.nativeEvent.pageY;
    }

    onRelease(e) {

        oldY = null;
    }

    _onStartShouldSetResponder(e) {
        return true;
    }

    _onMoveShouldSetResponder(e) {
        return true;
    }

    render() {
        return (
            <View style={styles.gameMenu}
                  onResponderMove={this.onMove}
                  onResponderRelease={this.onRelease}
                  onStartShouldSetResponder={this._onStartShouldSetResponder}
                  onMoveShouldSetResponder={this._onMoveShouldSetResponder}>

                <TouchableOpacity
                    onPress={selfClick}
                    style={styles.gameUserTouchable}>

                    <Image
                        style={styles.gameUser}
                        source={images.goose}
                    />

                </TouchableOpacity>

                <BottomMenu/>

                { this.state.modal && <Modal/>}

            </View>
        );
    }
}

class BottomMenu extends Component {
    render() {
        return (
            <View style={styles.userMenu}>

                <TouchableOpacity onPress={itemsClick}
                                  style={styles.button}>
                    <Text style={styles.userMenuText}>
                        {texts.items}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={menuClick}
                                  style={styles.button}>
                    <Text style={styles.userMenuText}>
                        {texts.menu}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

class Error extends Component {
    render() {
        return (
            <View style={styles.userMenu}>
                <Text style={styles.welcomeText}>
                    Error
                </Text>
            </View>
        );
    }
}
