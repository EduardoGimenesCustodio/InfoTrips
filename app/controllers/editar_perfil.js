module.exports.editar_perfil = function(app, req, res){
	if (req.session.loggedin) {
		if (req.query.email_usuario) {
			var email = req.query.email_usuario;
		} else {
			res.redirect('/perfil');
			return;
		}
        var connection = app.config.dbConnection();
		var usuarioModel = new app.app.models.UsuarioDAO(connection);
        
        usuarioModel.getUsuario(email, function(error, usuario) {
			usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
				res.render('cadastro/editar_cadastro', {usuario: usuario, foto_usuario: foto_usuario});
			});
	    });
	} else {
		res.redirect('/login');
	}
}

module.exports.editar_usuario = function(app, req, res, nome_foto_usuario){
	var usuario = req.body;
	var foto_usuario = nome_foto_usuario;

	var connection = app.config.dbConnection();
	var usuarioModel = new app.app.models.UsuarioDAO(connection);

	usuarioModel.editarUsuario(usuario, function(error, result){
		if (foto_usuario) {
			usuarioModel.getUsuario(usuario.email_usuario, function(error, result){
				var usuario_cadastrado = result;
				usuarioModel.getFotoUsuario(usuario_cadastrado.email_usuario, function(error, foto_usuario_cadastrado) {
					if (foto_usuario_cadastrado) {
						usuarioModel.editarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){
							res.redirect('/perfil');
						});
					} else {
						usuarioModel.cadastrarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){
							res.redirect('/perfil');
						});
					}
				});
			});
		} else {
			res.redirect('/perfil');
		}
	});
}