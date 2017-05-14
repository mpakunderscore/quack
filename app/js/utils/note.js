import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';

import {styles} from '../styles/styles';
import {closeModal} from '../actions';

export class Note extends Component {
    render() {
        return (
            <View style={styles.modal}>

                <TextInput
                    style={{height: 400, borderColor: 'gray', borderWidth: 0}}
                    onChangeText={(text) => this.setState({text})}
                />

                <View style={styles.userMenu}>

                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.userMenuText}>
                            Place
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
