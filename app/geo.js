let delta = 0.005;

export const geo = {

    region: {
        latitude: 59.9547,
        longitude: 30.3275,
        latitudeDelta: delta,
        longitudeDelta: delta
    }
};

navigator.geolocation.getCurrentPosition(

    (position) => {

        // let initialPosition = JSON.stringify(position);
        // this.setState({initialPosition});

        //TODO
        // alert(JSON.stringify(position))
        // geo.region.latitude = position.latitude;
        // geo.region.longitude = position.latitude;
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
);
