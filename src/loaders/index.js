const ExpressServer = require('./server/expressServer');
const config = require('../config');

module.exports = async () => {

    const server = new ExpressServer();
    console.log('express loaded');

    server.start();
    console.log(`Server listening on port : ${config.port}`);
}