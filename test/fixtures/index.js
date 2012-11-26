var callerid = require('../../');

module.exports = function(lvl) {
    return callerid(lvl);
}

module.exports.dirname = function(lvl) {
    return callerid.dirname(lvl);
}

module.exports.results = {
    file: callerid(),
    dir: callerid.dirname()
};