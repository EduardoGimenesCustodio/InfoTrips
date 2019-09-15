module.exports = function(app){
	app.get('/perfil', function(req,res){
		app.app.controllers.perfil.perfil(app, req, res);
	});
}