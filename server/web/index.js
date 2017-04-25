//'59.9547';
//'30.3275';


function initMap() {

    const city = {lat: 59.9547, lng: 30.3275};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: city
    });

    // var marker = new google.maps.Marker({
    //     position: city,
    //     map: map
    // });
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