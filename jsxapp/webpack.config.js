const path = require("path");
const hwp = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"), // converts relative path to absolute path
        filename: 'bundle.js'
    },
    entry: path.join(__dirname, "src", "index.js"), //removes hardcoding back and forward slashes for windows and apple
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', //transform jsx into regular js files
                options: {
                    presets: ['@babel/preset-react']


                }
            }
        ]

    },
    plugins: [
        new hwp({
            template: "index.html"
        }

        )
    ]
}