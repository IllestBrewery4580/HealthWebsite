const path = require('path')

module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: ['react-refresh/babel'],
                },
            },
        }],
    },
    devServer: {
        hot: true, // Enable hot module replacement
    },
};