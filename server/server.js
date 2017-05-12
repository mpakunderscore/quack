//SERVER

let database = require('./database.js');
let web = require('./web.js');
let socket = require('./socket.js');

database.run();
web.run();
socket.run();
