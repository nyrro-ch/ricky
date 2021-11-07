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
				directory: path.join(__dirname, 'public'),
			},
		],
		hot: true,
		compress: true,
		https: false,
		host: '0.0.0.0',
		port: 9000,
		devMiddleware: {
			writeToDisk: true
		}
	},

	output: {
		path: path.resolve(__dirname, 'public')
	}
}
