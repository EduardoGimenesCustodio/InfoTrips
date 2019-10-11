module.exports.cadastro = function(app, req, res){
	res.render('cadastro/cadastro', {validacao: {}});
}

module.exports.cadastrar_usuario = function(app, req, res, nome_foto_usuario){
	var usuario = req.body;
	var foto_usuario = nome_foto_usuario;

	var connection = app.config.dbConnection();
	var usuarioModel = new app.app.models.UsuarioDAO(connection);
	
	var email_cadastrado = false;

	usuarioModel.getEmailsUsuarios(function(error, result){
		var email_usuario = usuario.email_usuario;
		var emails_cadastrados = result;
		
		for (var i=0; i<emails_cadastrados.length; i++) {
			if (email_usuario === emails_cadastrados[i].email_usuario) {
				email_cadastrado = true;
			}
		}
		if (email_cadastrado) {
			var erro = 'E-mail já cadastrado em outra conta';
			res.render('cadastro/cadastro', {validacao: erro});
		} else {
			usuarioModel.cadastrarUsuario(usuario, function(error, result){
				if (foto_usuario) {
					usuarioModel.getUsuario(usuario.email_usuario, function(error, result){
						var usuario_cadastrado = result;
						usuarioModel.cadastrarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){
							app.app.controllers.login.login_usuario(app, req, res);
						});
					});
				} else {
					app.app.controllers.login.login_usuario(app, req, res);
				}
			});
		}
	});
}