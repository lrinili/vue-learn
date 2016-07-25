var webpack=require("webpack");
var path=require('path');
module.exports={
	entry:['./src/entry.js'],
	output:{
		path:path.join(__dirname,'./dist'),
		filename:"[name].js",
		 publicPath: '/dist/'
	},
	devServer:{
     historyApiFallback:true,
     hot:false,
     inline:true,
     grogress:true,
	},
	module:{
		loaders:[
		{test:/\.css$/,loader:"style!css"},
		{test:/\.(png|jpg)$/,loader:"url-loade?limit=8192"},
        {test:/\.vue$/,loader:'vue'},
         { test: /\.(html|tpl)$/, loader: 'html-loader' },
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },

		]
	},
	 vue: {
        loaders: {
              html:'html-loader'
        }
    },
        babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
        resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
	plugins: [
    new webpack.BannerPlugin("这aaaaaa！")//注意这是一个数组..
]
}