var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/app",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }, { 
                test: /\.scss?$/,
                loader: 'style!css!sass',
                include: __dirname + '/app'
            }, { 
                test: /\.png$/,
                loader: 'file' 
            },
        ]
    },
    output: {
        path: __dirname + '/app',
        filename: "index.min.js"
    },
    plugins: debug 
    ? [] 
    : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};