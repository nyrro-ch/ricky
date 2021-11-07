const path = require('path')
const webpack = require('webpack')

const TailwindCss = require('tailwindcss')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirStyles = path.join(__dirname, 'styles')

module.exports = {
	entry: [
		path.join(dirApp, 'index.js'),
	],

	output: {
		filename: '[name].js',
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
		new CopyWebpackPlugin({
			patterns: [
				{ from: './shared', to: ''}	
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					['gifscale'],
					['jpegtran'],
					['optipng']
				]
			}
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
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset',
			},
		]
	}

}
