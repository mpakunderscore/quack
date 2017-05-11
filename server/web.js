let connect = require('connect');
let serveStatic = require('serve-static');

const webPort = 8080;

web = function () {

    connect().use('/', serveStatic(__dirname + '/web')).listen(webPort, function () {

        // console.log(__dirname)
        console.log('web running on: ' + webPort);
    });
}
