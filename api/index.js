require ('dotenv')
const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/routes.js');
const errorHandler = require ('./src/utils/middlewares/errorHandler.js');
const setHeaders = require ('./src/utils/middlewares/setHeaders.js');
const {run} = require('./src/db/db.js');
const server = express();
const { PORT } = require ('./src/utils/config')
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev')); //responde en consola cuando hay una request
server.use(setHeaders);

server.use('/', routes);

// Error catching endware.
server.use(errorHandler);

run()
.then(()=>{
    server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`); // eslint-disable-line no-console
    });
})
.catch(console.dir);

module.exports = server