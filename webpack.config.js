var path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'auto'
    },
    mode : 'development',
    module: {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options: {
                        presets : [
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|wff|woff2)$/,
                use: ["file-loader"]
            },
            {
                test : /\.css/,
                use : ["style-loader" , "css-loader"]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ]
}