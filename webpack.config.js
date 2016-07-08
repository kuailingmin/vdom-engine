var webpack = require('webpack');
var path = require('path');

module.exports = {
    watch: true,
    entry: {
        counter: './examples/counter/src',
        'simple-spa': './examples/simple-spa/src',
    },
    output: {
        path: './examples/',
        filename: '[name]/index.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                stage: 0
            },
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: {
            'vdom-engine': path.join(__dirname, 'src'),
        }
    }
};
