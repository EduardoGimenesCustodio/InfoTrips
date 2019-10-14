module.exports.login = function(app, req, res){
	if (!req.session.loggedin) {
		res.render('login/login', {validacao: {}});
	} else {
		res.redirect('/perfil');
	}
}

module.exports.login_usuario = function(app, req, res){
	var email = req.body.email_usuario;
	var senha = req.body.senha_usuario;
	if (email && senha) {
		var connection = app.config.dbConnection();
		var usuarioModel = new app.app.models.UsuarioDAO(connection);
		usuarioModel.loginUsuario(email, senha, function(error, result){
			if (result.length > 0) {
				req.session.loggedin = true;
				req.session.email = email;
				res.redirect('/home');
			} else {
				var erro = 'E-mail ou senha incorretos';
				res.render('login/login', {validacao: erro});
			}
			res.end();
		});
	} else {
		res.end();
	}
}