var path = require("path");

module.exports = {
    cache: true,
    entry : ['./src/client/app.jsx'],
    output : {
        filename: 'app.bundle.js',
        path: path.join(__dirname, "dist/js/"),
        chunkFilename: "[chunkhash].js"
    },
    module : {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-0"],
                    plugins : [
                        ["transform-object-rest-spread", {"useBuiltIns" : true}]
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};