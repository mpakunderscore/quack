import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

import {styles} from '../styles/styles';
import {closeModal} from '../actions';

export let modal = {};
modal.display = false;

export class Modal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            style: styles.modal,
            marker: {}
        };

        modal.show = (marker) => {
            this.setState({
                marker: marker
            });
            modal.display = true;
        };

        modal.hide = () => {
            modal.display = false;
            this.setState({
                marker: {}
            });
        };
    }

    render() {
        return (

            modal.display &&

            <View style={this.state.style}>

                <Text style={styles.modalHead}>
                    {"This is duck"}
                </Text>

                <Text style={styles.modalText}>
                    {this.state.marker.title}
                </Text>

                <Text style={styles.modalText}>
                    {this.state.marker.description}
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


