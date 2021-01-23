//Webpack requires this to work with directories
const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is main configuration object that tells Webpackw what to do. 
module.exports = {
	//path to entry paint
	entry: './index.js',
	//path and filename of the final output
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
		port: 9000,
		host: '127.0.0.1'
  },
	//default mode is production
	mode: 'development'
}