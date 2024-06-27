const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
  
    mode,
    target,
    devtool,
    devServer: {
        watchFiles: path.resolve(__dirname, 'src'),
        port: 3000,
        open: true,
        hot: true,
    },
    
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[name][ext]',
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                  compress: {
                    drop_console: true, // remove console statement
                  },
                },
              }),
        ],
    },
    
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'sign-up',
            template: './src/sign/signup.html',
            filename: 'sign/signup.html',
        }),
        new HtmlWebpackPlugin({
            title: 'wallet',
            template: './src/wallet/wallet.html',
            filename: 'wallet/wallet.html'
        }),
        new HtmlWebpackPlugin({
            title: 'marketplace',
            template: './src/marketplace/marketplace.html',
            filename: 'marketplace/marketplace.html'
        }),
        new HtmlWebpackPlugin({
            title: 'marketplace',
            template: './src/rankings/rankings.html',
            filename: 'rankings/rankings.html'
        }),
        new HtmlWebpackPlugin({
            title: 'nftpage',
            template: './src/nft-page/nftpage.html',
            filename: 'nft-page/nftpage.html'
        }),
        new HtmlWebpackPlugin({
            title: 'artistpage',
            template: './src/artistpage/artistpage.html',
            filename: 'artistpage/artistpage.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.HotModuleReplacementPlugin(),
    
   ],
   module:{
    rules: [
        {
          test: /\.(png|jpg|svg|jpeg|gif)$/i,
          type: 'asset/resource',
        },

        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        
        {
          test: /\.(c|sa|sc)ss$/i,
            use: [
            devMode  ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                loader: 'postcss-loader',
                    options: {
                        postcssOptions:{
                            plugins: [require('postcss-preset-env')],
                        }
                    }
                }
            ],
        },
     ]
   }
}