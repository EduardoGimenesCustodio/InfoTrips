module.exports = function(app){
	app.get('/', function(req,res){
		app.app.controllers.home.index(app, req, res);
	});

	app.get('/home', function(req,res){
		app.app.controllers.home.index_recepcao(app, req, res);
	});
}