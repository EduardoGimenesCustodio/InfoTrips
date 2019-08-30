module.exports = function(app){
	app.get('/cadastro', function(req,res){
		app.app.controllers.cadastro.cadastro(app, req, res);
	});

	app.post('/cadastrar/usuario', function(req,res){
		app.app.controllers.cadastro.cadastrar_usuario(app, req, res);
	});
}