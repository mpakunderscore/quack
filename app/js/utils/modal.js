import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';

import {styles} from '../styles/styles';
import {closeModal} from '../actions';

export class Modal extends Component {
    render() {
        return (
            <View style={styles.modal}>

                <Text style={styles.modalText}>
                    Nothing
                </Text>

                <View style={styles.userMenu}>

                    {/*<TouchableOpacity onPress={closeModal}>*/}
                        {/*<Text style={styles.userMenuText}>*/}
                            {/*Close*/}
                        {/*</Text>*/}
                    {/*</TouchableOpacity>*/}

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


