const path = require('path')

module.exports = {
    entry: ["@babel/polyfill", "./src/app.js"],
    mode: "production",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //test only files that end in .js
                exclude: /node_modules/
            }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: "/"
    }
};
