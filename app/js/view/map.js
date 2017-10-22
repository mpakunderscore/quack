import React, {Component} from 'react';
import {Alert, Image, TouchableOpacity, View, Dimensions} from 'react-native';

import MapView from 'react-native-maps';

// import Gestures from 'react-native-touch-gestures';

import {styles} from '../styles/styles';
import {images} from '../utils/images';

// import {playSound} from '../actions';
import {markClick} from '../actions';
import {sendLocation} from '../client';

import {menu} from './menu';



const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
let LATITUDE = 0;
let LONGITUDE = 0;
let LATITUDE_DELTA = 0.005;
let LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export let map = {};
map.region = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
};


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

            this.setState({
                markers: markers
            });
        };

        map.removeUser = (id) => {

            let markers = this.getMarkers();

            let place = markers.place({id: id});

            //TODO check this, may be bug
            if (place > -1)
                markers.remove(id);

            this.setState({
                markers: markers
            });
        };

        // region: new MapView.AnimatedRegion({
        //     latitude: LATITUDE,
        //     longitude: LONGITUDE,
        //     latitudeDelta: LATITUDE_DELTA,
        //     longitudeDelta: LONGITUDE_DELTA,
        // }),

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: []
        };

        this.setLocation = this.setLocation.bind(this);
        this.getRegion = this.getRegion.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);

        navigator.geolocation.watchPosition(this.setLocation, (error) => {

            }, {

            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 15000,
            distanceFilter: 10,
            useSignificantChanges: false}
        );
    }

    getRegion() {
        return this.state.region;
    }

    getMarkers() {
        return this.state.markers;
    }

    //on gps move, duck position
    setLocation(position) {

        const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: map.region.latitudeDelta,
            longitudeDelta: map.region.longitudeDelta
        };

        // let current = map.region;

        //TODO
        if (region === this.getRegion())
            return;

        sendLocation(region);

        this.setState({region: region});

        //TODO
        map.setUser({id: "self", region: region, name: menu.name});

        //save duck region
        map.region = JSON.parse(JSON.stringify(region));

        //slow move view to duck
        this.slowChangeRegion(region);
    }

    //on user move
    onRegionChange(region) {

        if (region.latitudeDelta > 0.1) {

        }

        region.latitudeDelta = LATITUDE_DELTA;
        region.longitudeDelta = LONGITUDE_DELTA;

        map.region.latitudeDelta = region.latitudeDelta;
        map.region.longitudeDelta = region.longitudeDelta;

        this.setState({region: region});

        this.slowChangeRegion(region)
    }

    slowChangeRegion(region) {

        // console.log(map.region.latitude - region.latitude);

        // moveToCenter();

        // LATITUDE = region.latitude;
        // LONGITUDE = region.longitude;

        // map.region.latitudeDelta = ;
        // map.region.longitudeDelta = region.longitudeDelta;

        // region.longitude = map.region.longitude;
        // region.latitude = map.region.latitude;

        let moveBack = {
            longitude: map.region.longitude,
            latitude: map.region.latitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
        };

        // this.setState({region: region});

        // timer here and set moveBack
    }

    render() {
        return (
            <View
                style={styles.flex}>

                <MapView
                    style={styles.flex}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    moveOnMarkerPress={false}
                >
                    {this.state.markers.map(marker => (

                        <MapView.Marker.Animated
                            coordinate={marker.region}
                            key={marker.id}
                            style={styles.gameUserMarker}
                            onPress={() => markClick(marker)}
                        >

                            <TouchableOpacity style={styles.gameUserTouchable}>

                                <Image source={images[marker.name]}
                                       style={styles.gameUser}/>

                            </TouchableOpacity>

                        </MapView.Marker.Animated>

                    ))}

                </MapView>

            </View>
        );
    }
}

export function placeUser(user) {

    // this.state.coordinate.timing({
    //     ...nextProps.coordinate,
    //     duration: 500
    // }).start();

    user.region = {
        latitude: user.latitude,
        longitude: user.longitude,
    };

    map.setUser(user);
}


export function removeUser(id) {
    map.removeUser(id);
}

export function changeUserImage() {

}

export function buildMap(map) {

    // let home = map.home;

    console.log(map);

    let users = map.users;

    console.log('users');
    console.log(users);

    for (let key in users) {
        if (users.hasOwnProperty(key)) {
            placeUser(users[key]);
        }

        // Alert.alert(id);
    }

    let npc = map.npc;

    let arrayLength = npc.length;
    for (let i = 0; i < arrayLength; i++) {
        setNPC(npc[i]);
        // Alert.alert(npc[i]);
    }

    // let items = map.items;

    // let stores = map.stores;
}

//yes, this is ducks. users is a ducks too. everything is a duck. its a DuckScript
//this is npc
function setNPC(duck) {

    // console.log("NPC")
    placeUser(duck);
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