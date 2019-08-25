module.exports = function(app){

	app.get('/busca', function(req,res){
		app.app.controllers.busca.busca(app, req, res);
	});

	app.post('/busca', function(req,res){
		app.app.controllers.busca.busca(app, req, res);
	});
}