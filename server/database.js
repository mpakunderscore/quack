let Sequelize = require('sequelize');

let sequelize = new Sequelize('quack', 'pavelkuzmin', '', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

exports.run = function () {

    sequelize
        .authenticate()
        .then(function(err) {
            console.log('Database connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
}

let User = sequelize.define('user', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
})

let Place = sequelize.define('place', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
})

let Item = sequelize.define('item', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
})
