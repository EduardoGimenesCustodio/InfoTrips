var app = require('./config/server');

var server = app.listen(3000,function(){
	console.log('Servidor ON');
});