import React, {Component} from 'react';
import {Alert, Image} from 'react-native';

import MapView from 'react-native-maps';

import {styles} from './styles';
import {images} from './images';

import {playSound} from '../actions';
import {sendLocation} from '../client';
import {gameUsersWidth} from './styles';

//'59.9547';
//'30.3275';

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
            },
            markers: [
                {
                    id: '0',
                    region: {
                        latitude: 59.9537,
                        longitude: 30.3275,
                    },
                    title: 'test',
                    description: 'test'
                }
            ]
        };

        this.setLocation = this.setLocation.bind(this);
        this.getRegion = this.getRegion.bind(this);
        this.setUser = this.setUser.bind(this);

        navigator.geolocation.watchPosition(this.setLocation, (error) => {

            }, {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}
        );
    }

    setUser(user) {

        // https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
        this.setState({
            markers: this.state.markers.concat([user])
        });
    }

    getRegion() {
        return this.state.region;
    }

    setLocation(position) {

        const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: delta,
            longitudeDelta: delta
        };

        // console.log('region')
        // console.log(region)
        // console.log(this.getRegion())

        //TODO
        if (region === this.getRegion())
            return;

        playSound();

        sendLocation(region);

        this.setState({
            region: region
        });
    }

    render() {
        return (
            <MapView
                style={styles.gameMap}
                region={this.state.region}
            >
                {this.state.markers.map(marker => (

                    <MapView.Marker
                        coordinate={marker.region}
                        key={marker.id}
                        title={marker.title}
                        description={marker.description}
                    >
                        <Image source={images.goose}
                               style={styles.gameUsers}/>

                    </MapView.Marker>

                ))}
            </MapView>
        );
    }
}

export function placeUser(region) {

    let user = {
        id: region.id,
        region: {
            latitude: region.latitude,
            longitude: region.longitude,
        },
        title: 'user',
        description: 'user'
    };

    // this.Map.setUser(user);

    console.log('user');
    console.log(user)
}
