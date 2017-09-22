import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

import {styles} from '../styles/styles';
import {closeModal} from '../actions';
import {speak} from '../actions';

import {menu} from '../view/menu';

export class Modal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            text: "",
        };
    }

    render() {
        return (
            <View style={styles.modal}>

                {menu.edit &&
                <TextInput
                    style={styles.input}
                    autoFocus={true}
                    // multiline={true}
                    placeholder="Я говорю голосом всем всякую хуйню."
                    // numberOfLines = {5}
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}/>}


                <KeyboardAvoidingView style={styles.userMenu}>

                    <TouchableOpacity onPress={() => speak(this.state.text)}>
                        <Text style={styles.userMenuText}>
                            Send
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.userMenuText}>
                            Close
                        </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>
        );
    }
}


