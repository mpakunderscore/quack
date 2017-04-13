import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

import {styles} from './styles/styles';
import {texts} from './utils/texts';
import {images} from './utils/images';

import {selfClick} from './actions';
import {selectClick} from './actions';
import {menuClick} from './actions';
import {itemsClick} from './actions';


import {moveOut} from './map';
import {moveIn} from './map';

import {alert} from './actions';

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

export class GameMenu extends Component {

    onMove(e) {

        //Update our state with the deltaX/deltaY of the movement
        // this.setState({
        //     x: this.state.x + (e.nativeEvent.pageX - this.drag.x),
        //     y: this.state.x + (e.nativeEvent.pageY - this.drag.y)
        // });

        moveOut(this.drag.x);

        //Set our drag to be the new position so our delta can be calculated next time correctly
        this.drag.x = e.nativeEvent.pageX;
        this.drag.y = e.nativeEvent.pageY;
    }

    onRelease(e) {

        moveIn();

        //Reset on release
        // this.setState({
        //     x: 0,
        //     y: 0,
        // })
    }

    _onStartShouldSetResponder(e) {
        this.drag = {
            x: e.nativeEvent.pageX,
            y: e.nativeEvent.pageY
        };

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

            </View>
        );
    }
}

export class BottomMenu extends Component {
    render() {
        return (
            <View style={styles.userMenu}>

                <TouchableOpacity onPress={itemsClick()}
                                  style={styles.button}>
                    <Text style={styles.userMenuText}>
                        {texts.items}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={menuClick()}
                                    style={styles.button}>
                    <Text style={styles.userMenuText}>
                        {texts.menu}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export class Error extends Component {
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