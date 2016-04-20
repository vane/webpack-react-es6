var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './static/es6/bundle.js'
        //filename: './static/es6/bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015'],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                    ]
                }
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    ]
};
