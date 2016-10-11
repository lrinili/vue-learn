var webpack = require('webpack');
var path = require('path');
module.exports={
	entry:['./src/main.js'],
	output:{
		path:path.join(__dirname,'./dist'), //输出路径文件夹名和目录
		filename:"[name].js",
		publicPath:'/dist/'
	},
	devServer:{
		historyApiFalback:true,
		hot:false,
		inline:true,
		grogress:true
	},
	module:{
		loaders:
		[
		{test:/\.css$/,loader:"style!css"},
		{test:/\.(png|jpg)$/,loader:"url-loader?limit=8192"},
        {test:/\.vue$/,loader:'vue'},
         { test: /\.(html|tpl)$/, loader: 'html-loader' },
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
	    ]
	   },
	    babel:{
	    	presets:['es2015'],
	    	plugins:['transform-runtime']
	    },
	    resolve:{
	    	extensions:['','.js','.vue'],
	    	alias:{
	    		filter:path.join(__dirname,'./src/filters'),
	    		components:path.join(__dirname,'components')
	    	}
	    },
        plugins:[
        new webpack.BannerPlugin('created by lyy')
        ]










	
}