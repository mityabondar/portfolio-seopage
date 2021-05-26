const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: './src/css/[id].css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: (resourcePath, context) => {
                      return path.relative(path.dirname(resourcePath), context) + '/';
                    },
                  },
                },
                'css-loader',
              ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    }
};