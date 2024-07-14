const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { library } = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		'monaco-editor': './index.js',
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js'
		// "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
		// "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
		// "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
		// "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
	},
	output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'module'
		}
	},
	experiments: {
		outputModule: true
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
};
