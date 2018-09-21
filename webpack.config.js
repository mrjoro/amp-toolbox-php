/* global require, module, __dirname */

const path = require( 'path' );

module.exports = {
	entry: {
		'./assets/js/amp-blocks-compiled': './blocks/index.js',
		'./assets/js/amp-block-editor-toggle-compiled': './assets/src/amp-block-editor-toggle.js',
		'./assets/js/amp-validation-error-detail-toggle-compiled': './assets/src/amp-validation-error-detail-toggle.js',
		'./assets/js/amp-validation-single-error-url-details-compiled': './assets/src/amp-validation-single-error-url-details.js',
		'./assets/js/amp-validation-tooltips-compiled': './assets/src/amp-validation-tooltips.js'
	},
	output: {
		path: path.resolve( __dirname ),
		filename: '[name].js'
	},
	externals: {
		'amp-validation-i18n': 'ampValidationI18n'
	},
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
