const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './dist/tsc/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          }),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname,'src/csv'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
          })
          
      ],
      module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ],
      },
    
};