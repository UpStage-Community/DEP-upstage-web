// The following was influenced by https://github.com/christianalfoni/webpack-express-boilerplate

const express = require('express')
const path = require('path')
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const debug = process.env.NODE_ENV !== 'production';
const port = debug ? 8080 : process.env.PORT;
const app = express();

if (debug) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

} else {
  app.use(express.static(__dirname + '/app'));

}

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
})

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎  Listening at http://localhost:${port}`);
});