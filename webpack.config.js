var path = require('path');
require("babel-polyfill");

module.exports = {
    cache: true,
    entry: ['babel-polyfill', './src/client/app.jsx'],
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'dist/js/'),
        chunkFilename: '[chunkhash].js',
      },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
              },
        ],
      },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
  };
