const path = require('path')
const webpack = require('webpack')
//const DashboardPlugin = require('webpack-dashboard/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: './js/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name][chunkhash:6].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader:'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]',
                            camelCase: true
                        }
                    }]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                    }
                }
                ]
            }
        ]
    },
    // performance: {
    //     hints: 'error'   
    // },
    // resolve: {
    //     alias: {
    //         react: 'preact-compat',
    //         'react-dom': 'preact-compat'
    //     }
    // },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.[chunkhash:6].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new UglifyJSPlugin({
             sourceMap: true
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/icons/'),
            to: path.resolve(__dirname, '../dist/')
          }]),
        // it's always better if OfflinePlugin is the last plugin added
        new OfflinePlugin({
            // version: '[hash]',
            responseStrategy: 'network-first',
            safeToUseOptionalCaches: true,
            AppCache: false,
            externals: ['/'],
            publicPath: '/sw.js',
            ServiceWorker: {
              events: true,
              output: 'sw.js',
            },
            relativePaths: '.'
          })
    ]
}
