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
    },

    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        {"pixi.js": "PIXI"}
    ]
};