let connect = require('connect');
let serveStatic = require('serve-static');

const webPort = 8080;

exports.run = function () {

    connect().use('/', serveStatic(__dirname + '/web')).listen(webPort, function () {

        // console.log(__dirname)
        console.log('Web running on: ' + webPort);
    });
}
