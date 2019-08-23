module.exports = function(app){
	app.post('/busca', function(req,res){
		app.app.controllers.busca.busca(app, req, res);
	});
}