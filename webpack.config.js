const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'js/bundle.js',
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
                cache: true,
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Catálogo de Objetos Educacionais',
            template: './src/index.html',
            filename: './index.html',
            inject: false
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader' // interpreta @import, url() ...  
            ]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                // 'file-loader?name=teste_tls/t5/images/[name].[ext]',
                'file-loader?name=images/[name].[ext]',
                'image-webpack-loader'
            ]
        }, {
            // loader para carregar fonts no projeto
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    watch: false,
}