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
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: [
                        ['transform-object-rest-spread', { useBuiltIns: true }],
                    ],
                  },
              },
        ],
      },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
  };
