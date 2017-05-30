const path = require('path');
var p = path.resolve(__dirname,'app/temp');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: p+ "/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
