const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders:
                [
                    'style-loader',
                    {
                      loader: 'typings-for-css-modules-loader',
                      options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true
                      }
                    },
                    'sass-loader?outputStyle=expanded&sourceMap'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            { test: /\.(ttf|svg|png|eot|woff2?|)$/, loaders: ["file-loader"] }
        ]
    },
    plugins: [
        new webpack.WatchIgnorePlugin([
            /scss\.d\.ts$/
        ]),
    ],
    resolve: {
        extensions: ['.tsx','.ts','.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devServer: {
    //     hot: true,
    //     historyApiFallback: true,
    // }
};