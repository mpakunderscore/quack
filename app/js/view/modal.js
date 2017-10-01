import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

import {styles} from '../styles/styles';
import {closeModal} from '../actions';

export let modal = {};

export class Modal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            style: styles.modal
        }

        modal.show = () => {

            this.setState({
                style: styles.modalShow
            });
        };

        modal.hide = () => {

            this.setState({
                style: styles.modal
            });
        };
    }

    render() {
        return (
            <View style={this.state.style}>

                <Text>
                    0x99314BCB71c8f932C369b18264BB135e2C2a66A5
                </Text>

                <Buttons/>

            </View>
        );
    }
}

class Buttons extends Component {
    render() {
        return (
            <View style={styles.modalButtons}>

                <TouchableOpacity onPress={closeModal}>
                    <Text style={styles.modalText}>
                        Close
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}


