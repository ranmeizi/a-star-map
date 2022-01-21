const path = require('path');

module.exports = {
    entry: './module/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'AStar'
    },
};