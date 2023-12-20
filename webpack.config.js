const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: miniCss.loader
                        /*    options: {
                            sourceMap: true
                        } */
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                        /*       plugins: [
                            autoprefixer({
                                browsers: ['ie >= 8', 'last 4 version']
                            })
                        ] */
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img') }]
        })
    ]
};
