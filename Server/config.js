/**
 * MediaScape SharedState - config.js
 * configuration file
 *
 * @author Andreas Bosl <bosl@irt.de>
 * @copyright 2014 Institut für Rundfunktechnik GmbH, All rights reserved.
 */
var config = {};

// config for mongodb / mongoose
config.mongoose = {
    uri: 'mongodb://localhost/',
    options: {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }
};

// config for the Core
config.db = {
    file: './MongoDB.js' // MongoDB
};

// TableName used for mapping
config.mappingPath = 'mappingTable'; 


// config for express
config.express = {
    port: 7000,
    filePath: '/../public'
};


// Config for log4js
config.logConfig = {
    appenders: [
        {
            type: 'file',
            filename: './log/sharedsstate.log',
            maxLogSize: 10240,
            backups: 3
        },
        {
            type: "console"
        }
  ],
    replaceConsole: true
};

module.exports = config;
