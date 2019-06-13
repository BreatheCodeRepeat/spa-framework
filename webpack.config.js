const path = require('path');

module.exports = {
    entry: './dist/tsc/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};