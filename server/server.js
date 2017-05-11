//SERVER

require('./database.js');
require('./web.js');
require('./socket.js');

let map = {
    users: {},
    places: []
};

database();
web();
socket();
