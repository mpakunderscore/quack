import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';

import {Map} from './utils/map';

import {styles} from './styles/styles';
import {texts} from './utils/texts';
import {images} from './utils/images';

import {selfClick} from './actions';
import {selectClick} from './actions';

//android cannot just hide nav. bar

function onTap() {
    Alert.alert('onTap')
}

export class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Map/>
                <MainMenu/>
            </View>
        )
    }
}

export class Game extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Map/>
                <TouchableOpacity
                    style={styles.gameMapTouchable}
                    onPress={onTap()}>
                    <GameMenu/>
                </TouchableOpacity>
            </View>
        )
    }
}

// export class MainMap extends Component {
//     render() {
//         return (
//             <Map/>
//         );
//     }
// }

export class MainMenu extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text style={styles.welcomeText}>
                    {texts.welcome}
                </Text>
                <TouchableOpacity
                    onPress={selectClick}
                    style={styles.selectAnimalTouchable}>
                    <Image
                        style={styles.selectAnimal}
                        source={images.goose}
                    />
                </TouchableOpacity>

                {/*<Text style={styles.select}>*/}
                    {/*{texts.ok}*/}
                {/*</Text>*/}
            </View>
        );
    }
}

// export class GameMap extends Component {
//     render() {
//         return (
//             <Map/>
//         );
//     }
// }

export class GameMenu extends Component {
    render() {
        return (
            <View style={styles.gameMenu}>
                <TouchableOpacity
                    onPress={selfClick}
                    style={styles.gameUserTouchable}>
                    <Image
                        style={styles.gameUser}
                        source={images.goose}
                    />
                </TouchableOpacity>
                <BottomMenu/>
            </View>
        );
    }
}

export class BottomMenu extends Component {
    render() {
        return (
            <View style={styles.userMenu}>
                <Text style={styles.userMenuText}>
                    {texts.items}
                </Text>
                <Text style={styles.userMenuText}>
                    {texts.menu}
                </Text>
            </View>
        );
    }
}