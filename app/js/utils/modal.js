import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

import {styles} from '../styles/styles';
import {texts} from '../utils/texts';
import {images} from '../utils/images';

import {selfClick} from '../actions';
import {selectClick} from '../actions';
import {itemsClick} from '../actions';
import {menuClick} from '../actions';
import {mainMenu} from '../actions';
import {closeModal} from '../actions';
// import {moveOut} from '../actions';
// import {moveIn} from '../actions';
import {zoom} from '../actions';

export class Modal extends Component {
    render() {
        return (
            <View style={styles.modal}>

                <Text style={styles.modalText}>
                    Nothing
                </Text>

                <View style={styles.userMenu}>

                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.userMenuText}>
                            Close
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.userMenuText}>
                            Close
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}


