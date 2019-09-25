module.exports = function(app){
	app.get('/login', function(req,res){
		app.app.controllers.login.login(app, req, res);
	});

	app.post('/usuario/login', function(req,res){
		app.app.controllers.login.login_usuario(app, req, res);
	});
}