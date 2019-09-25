module.exports = function(app){
	app.get('/perfil', function(req,res){
		app.app.controllers.perfil.perfil(app, req, res);
	});

	app.post('/usuario/sair', function(req,res){
		app.app.controllers.perfil.logout_usuario(app, req, res);
	});
}