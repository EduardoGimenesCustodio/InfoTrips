
module.exports = function(app){

	app.get('/pais', function(req,res){
		app.app.controllers.pais.pais(app, req, res);
	});

}