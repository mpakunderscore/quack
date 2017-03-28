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
        // alert(JSON.stringify(position.coords));
        geo.region.latitude = position.coords.latitude;
        geo.region.longitude = position.coords.longitude;
        // geo.region.latitudeDelta = position.coords.latitude;
        // geo.region.longitudeDelta = position.coords.latitude;

    }, (error) => {

        // geo.region.latitude = "59.9547";
        // geo.region.longitude = "30.3275";

    }, {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}
);
