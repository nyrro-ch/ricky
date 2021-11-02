const path = require('path')

module.exports = {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		static: [
			{
				directory: path.join(__dirname, 'views'),
			},
			{
				directory: path.join(__dirname, 'partials'),
			},
			{
				directory: path.join(__dirname, 'public'),
			},
		],
		hot: true,
		compress: true,
		https: false,
		host: '0.0.0.0',
		port: 9000,
	},

	output: {
		path: path.resolve(__dirname, 'dist')
	}
}
