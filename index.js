var babel = require('babel-core');

module.exports = function (name, src)
{
    return babel.transform(src, {
        presets: ['es2015']
    }).code;
};