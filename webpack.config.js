const path = require('path');

module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        ['es2015']
                    ]
                }
            }
        ]
    }
};
