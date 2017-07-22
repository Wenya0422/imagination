const
    webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    fs = require('fs')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    stats: {
        children: false
    },
    devtool: false,
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    externals: {
        'pixi.js': 'PIXI',
        'matter-js': 'Matter'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin("index.css")
    ]
}