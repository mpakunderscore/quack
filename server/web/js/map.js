//'59.9547';
//'30.3275';

let map;
let markers = [];

function initMap() {

    const city = {lat: 59.9547, lng: 30.3275};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: city,
        // mapTypeId: 'mapStyle',

        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
    });

    map.mapTypes.set('mapStyle', new google.maps.StyledMapType(mapStyle, { name: 'Map style' }));


    // var marker = new google.maps.Marker({
    //     position: city,
    //     map: map
    // });
}

function buildWebMap(map) {

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

function placeUser(region) {

    console.log('place user: ' + region.id)

    let user = {
        id: region.id,
        region: {
            latitude: region.latitude,
            longitude: region.longitude,
        },
        title: 'user',
        description: 'user'
    };

    let position = {lat: user.region.latitude, lng: user.region.longitude};

    let place = markers.place(user);

    //update user
    if (place > -1) {

        markers[place].region = user.region;

        // const latlng = new google.maps.LatLng(-24.397, 140.644);
        markers[place].marker.setPosition(position);

    } else {

        let image = {
            url: './images/favicon.png',
            // This marker is 20 pixels wide by 32 pixels high.
            // size: new google.maps.Size(250, 250),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(35, 35),

            scaledSize: new google.maps.Size(70, 70)
        };

        user.marker = new google.maps.Marker({

            position: position,
            map: map,
            // label: 'Label',
            icon: image
        });

        // user.marker.setAnimation(google.maps.Animation.BOUNCE);

        markers.push(user);
    }
}

function removeUser(id) {

    console.log('remove user: ' + id)

    let place = markers.place({id: id});

    if (place > -1) {

        markers[place].marker.setMap(null);
        markers.remove(place);
    }
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