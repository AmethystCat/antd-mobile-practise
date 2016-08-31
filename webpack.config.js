var path = require('path'),
    webpack = require('webpack'),
    env = process.env.NODE_ENV;

console.log(env);
console.log('==================================================华丽丽的分割线=============================================');

// 开发环境配置
// --------------------------------------------------------------------------------------------
var config_dev = {
	entry: {
		bundle: [
			'webpack/hot/dev-server',
			path.resolve(__dirname,'src/entry.js')
		],
		vendors: ['react', 'react-dom']
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname,'build'),
		publicPath: '/'
	},
	resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
		root: '/src',
		extensions: ['', '.web.js', '.js', 'jsx', '.json', '.less']
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'less-loader?sourceMap']
            },
            {
                test: /\.(jpg|jpeg|png|gif|)$/i,
                loaders: ['url-loader?limit=15000']
            }, 
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000'
            }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
	],
	devServer: {
            hot: true,
            inline: true
        }
};

module.exports = config_dev;
