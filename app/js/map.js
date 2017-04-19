import React, {Component} from 'react';
import {Alert, Image, TouchableOpacity} from 'react-native';

import MapView from 'react-native-maps';

// import Gestures from 'react-native-touch-gestures';

import {styles} from './styles/styles';
import {images} from './utils/images';

import {playSound} from './actions';
import {sendLocation} from './client';

//'59.9547';
//'30.3275';

let delta = 0.005;
// let delta = 0.05;

export let map = {};

export class Map extends Component {

    constructor(props) {

        super(props);

        map.setUser = (user) => {

            let markers = this.getMarkers();

            let place = markers.place(user);

            if (place > -1)
                markers[place] = user;

            else
                markers.push(user);

            // console.log('markers');
            // console.log(markers);

            this.setState({
                markers: markers
            });
        };

        map.removeUser = (id) => {

            let markers = this.getMarkers();

            let place = markers.place({id: id});

            if (place > -1)
                markers = markers.remove(id);

            // console.log('markers');
            // console.log(markers);

            this.setState({
                markers: markers
            });
        };

        // map.moveOut = (x) => {
        //
        //     this.setState({
        //         region: {
        //             latitude: this.getRegion().latitude,
        //             longitude: this.getRegion().longitude,
        //             latitudeDelta: this.getRegion().latitudeDelta * 1.1,
        //             longitudeDelta: this.getRegion().longitudeDelta * 1.1
        //         }
        //     });
        // };
        //
        // map.moveIn = () => {
        //
        //     this.setState({
        //         region: {
        //             latitude: this.getRegion().latitude,
        //             longitude: this.getRegion().longitude,
        //             latitudeDelta: 0.005,
        //             longitudeDelta: 0.005
        //         }
        //     });
        // };

        map.zoom = (bias) => {

            delta *= bias;

            if (delta < 0.005)
                delta = 0.005;

            if (delta > 1)
                delta = 1;

            this.setState({
                region: {
                    latitude: this.getRegion().latitude,
                    longitude: this.getRegion().longitude,
                    latitudeDelta: delta,
                    longitudeDelta: delta
                }
            });
        };

        map.play = () => {

            this.setState({
                style: styles.gameMap
            });
        };

        this.state = {
            style: styles.map,
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: delta,
                longitudeDelta: delta
            },
            markers: []
        };

        this.setLocation = this.setLocation.bind(this);
        this.getRegion = this.getRegion.bind(this);

        this.getMarkers = this.getMarkers.bind(this);

        navigator.geolocation.watchPosition(this.setLocation, (error) => {

            }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    getRegion() {
        return this.state.region;
    }

    getMarkers() {
        return this.state.markers;
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

        // playSound();

        sendLocation(region);

        this.setState({
            region: region
        });
    }

    render() {
        return (
            <MapView
                style={this.state.style}
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
                               style={styles.gameUser}/>

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

    map.setUser(user);

    // console.log('user');
    // console.log(user)
}


export function removeUser(id) {
    map.removeUser(id);
}

export function buildMap(map) {

    //

    // let testRegion = {
    //     id: '0',
    //     latitude: 59.9537,
    //     longitude: 30.3275,
    // };

    let home = map.home;

    let users = map.users;

    console.log('users');
    console.log(users);

    for (let id in users) {
        placeUser(users[id]);
    }

    // users.map(user => {
    //     placeUser(user);
    // });

    let items = map.items;

    let stores = map.stores;
}

Array.prototype.place = function (obj) {

    let i = this.length;
    while (i--) {

        if (this[i].id == obj.id) {
            return i;
        }
    }
    return -1;
};


Array.prototype.remove = function (id) {

    let i = this.length;
    while (i--) {

        if (this[i].id == id) {
            this.splice(i, 1);
        }
    }
};