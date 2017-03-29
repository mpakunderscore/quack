import React, {Component} from 'react';

import MapView from 'react-native-maps';

import {styles} from './styles';

import {playSound} from '../actions';

let delta = 0.005;

export class Map extends Component {

    constructor(props) {

        super(props);

        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: delta,
                longitudeDelta: delta
            }
        };

        this.setLocation = this.setLocation.bind(this);

        navigator.geolocation.watchPosition(this.setLocation, (error) => {

            }, {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}
        );
    }

    setLocation(position) {

        playSound();

        const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: delta,
            longitudeDelta: delta
        };

        this.setState({
            region: region
        });
    }

    render() {
        return (
            <MapView
                style={styles.gameMap}
                region={this.state.region}
            />
        );
    }
}
