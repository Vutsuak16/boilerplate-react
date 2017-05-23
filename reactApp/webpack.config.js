const path = require('path');
var config = {
   entry: './main.js',
	
   output: {
      //path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
	        test: /\.css/,
	        loaders: ['style-loader', 'css-loader'],
      	  }
      ]
   }
}

module.exports = config;