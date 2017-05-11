let Sequelize = require('sequelize');

let sequelize = new Sequelize('template1', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

database = function () {

    sequelize
        .authenticate()
        .then(function(err) {
            console.log('Database connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
}