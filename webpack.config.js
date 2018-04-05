const path = require('path');

module.exports = {
    entry: './assets/scripts/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader :'file-loader',
                        options : {
                            name : 'images/[name].[ext]'
                        }
                    },
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    devServer: {
        stats : 'errors-only',
        publicPath : '/build/',
        open: true
    }
};