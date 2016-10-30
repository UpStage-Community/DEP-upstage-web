var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

// from: http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html
// from: http://revelry.media/tech-talk/2016/2/15/getting-a-simple-react-app-on-heroku
module.exports = {
    context: __dirname + "/app",
    devtool: debug ? "inline-sourcemap" : 'sourcemap',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        "./js/index.js"
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ],
                    plugins: [ 'transform-decorators-legacy', 'transform-class-properties' ]
                }
            }, { 
                test: /\.less?$/,
                exclude: /node_modules/,
                loader: "style!css!less!",
                include: __dirname + '/app'
            }, { 
                test: /\.png$/,
                loader: 'file' 
            }
        ]
    },
    output: {
        path: __dirname + '/app',
        publicPath: '/',
        filename: "index.min.js"
    },
    resolve: {
        root: [path.resolve('./app'), path.resolve('./node_modules')],
        modulesDirectories: ['node_modules', 'styles', 'js', 'images'],
        extensions: ['', '.js', '.jsx', '.json', '.less']
    },

    plugins: debug 
    ? [    
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()] 
    : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        })
    ],
};