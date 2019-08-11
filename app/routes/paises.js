
module.exports = function(app){

	app.get('/paises', function(req,res){
		app.app.controllers.paises.paises(app, req, res);
	});

	// app.get('/paises', function(req,res){

	// 	var mysql = require('mysql');

	// 	var connection = mysql.createConnection({
	// 		host: 'localhost',
	// 		user: 'root',
	// 		password: '',
	// 		database: 'InfoTrips'			
	// 	});

	// 	connection.query('select * from visto', function(error, result){
	// 		res.send('essa merda não conecta  '+result);
	// 	});
	// });

	app.get('/pais', function(req,res){
		app.app.controllers.paises.pais(app, req, res);
	});

}