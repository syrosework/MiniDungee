const
    argv = require('yargs').argv;

const
    PRODUCTION = !!argv.production;

module.exports = {
    entry: './assets/scripts/index.js',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    devtool: (PRODUCTION ? '' : 'source-map')
};