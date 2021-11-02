const path = require('path')

const config = require('./webpack.config.js')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	mode: 'production',

	output: {
		path: path.join(__dirname, 'public'),
		clean: true
	},

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		],
	}
}
