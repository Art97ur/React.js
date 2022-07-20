const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Terser = require("terser-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin") 
module.exports = {
	entry: './src/index.js',
	output:{
		filename: 'bundle[contenthash].js',
		path: path.resolve(__dirname, "./dist") 
	},
	mode:'development',
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[MiniCssExtractPlugin.loader,'css-loader']
			},
            {
                test:/\.js|jsx$/,
                use:["babel-loader"]
            }
		]
	},
	devServer:{
		static:{
			directory:path.resolve(__dirname, "./dist")	
		},
	    port: 3004,
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: "style[contenthash].css"
		}),
		new Terser(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	]
}