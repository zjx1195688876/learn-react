/*eslint-disable*/
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'webapp/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};