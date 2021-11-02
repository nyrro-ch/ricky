const path = require('path')
const webpack = require('webpack')

const TailwindCss = require('tailwindcss')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirStyles = path.join(__dirname, 'styles')

module.exports = {
	entry: [
		path.join(dirApp, 'index.js'),
	],

	output: {
		filename: '[name].[contenthash].js',
		path: path.join(__dirname, 'public')
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'app'),
			path.resolve(__dirname, 'styles'),
			path.resolve(__dirname, 'assets'),
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.pug')
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './shared', to: ''}	
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css'
		})
	],

	module: {
		rules: [
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.m?js$/, 
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(pcss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								path: path.resolve(__dirname),
								plugins: [
									['postcss-import', {
										path: ['./node_modules'],
									}],
									TailwindCss('./tailwind.config.js'),
									['postcss-mixins'],
									['postcss-nested'],
									['postcss-hexrgba'],
								],
							}
						}
					}
				]
			}
		]
	}

}
