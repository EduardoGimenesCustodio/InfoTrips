module.exports = function(app){
	app.get('/login', function(req,res){
		app.app.controllers.login.login(app, req, res);
	});

	app.post('/usuario/login', function(req,res){
		app.app.controllers.login.login_usuario(app, req, res);
	});

	// Admin

	app.get('/login_adm', function(req,res){
		app.app.controllers.login.login_adm(app, req, res);
	});

	app.post('/admin/login', function(req,res){
		app.app.controllers.login.login_admin(app, req, res);
	});
}