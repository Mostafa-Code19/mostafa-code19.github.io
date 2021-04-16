const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({path: __dirname + '/.env'});   

module.exports = {
    entry: '/src/script.js',

    output: {
        filename: 'app.js',
        path: path.resolve('./'),
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        }),
    ]
};