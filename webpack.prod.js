const path = require('path')

const config = require('./webpack.config.js')

module.exports = {
	mode: 'production',

	output: {
		path: path.join(__dirname, 'dist'),
		clean: true
	},
}
