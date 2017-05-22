const path = require('path');
var p = path.resolve(__dirname, './dist');

module.exports= {	

		entry:  "./app/assets/scripts/app.js", 

		output: {
		path: p + "./app/temp/scripts", 
		filename:"App.js"
		}
}
		