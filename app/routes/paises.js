
module.exports = function(app){

	app.get('/paises', function(req,res){
		app.app.controllers.paises.paises(app, req, res);
	});

	app.get('/pais', function(req,res){
		app.app.controllers.paises.pais(app, req, res);
	});

}