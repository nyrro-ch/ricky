const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

module.exports = {
	entry: [
		path.join(__dirname, 'index.js')
	],

	output: {
		filename: '[name].[contenthash].js'
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'app'),
			path.resolve(__dirname, 'assets'),
		]
	},

	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: './shared', to: ''}	
			]
		})
	],

	module: {
		rules: [
			{
				test: /\.m?js$/, 
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

}
