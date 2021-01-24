let config;

try {
    config = require('../config.json');
}
catch (error) {
    config = null;
}


/* If defined by config, that takes precedence, otherwise use Environment Variable */

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.PREFIX = config ? config.PREFIX : process.env.PREFIX;

