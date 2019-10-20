module.exports.cadastro = function(app, req, res){
	if (!req.session.loggedin) {
		res.render('cadastro/cadastro', {validacao: {}});
	} else {
		res.redirect('/perfil');
	}
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
				usuarioModel.getUsuario(usuario.email_usuario, function(error, result){
					var usuario_cadastrado = result;
					var checklistModel = new app.app.models.ChecklistDAO(connection);
					var paisModel = new app.app.models.PaisDAO(connection);
					var favoritoModel = new app.app.models.FavoritoDAO(connection);

					if (foto_usuario) {
						usuarioModel.cadastrarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){

							checklistModel.getExigenciasPaises(function(error, exigencias_paises){
								var id_usuario = usuario_cadastrado[0].id_usuario;
								for (var i=0; i<exigencias_paises.length; i++) {
									var id_exigencia = exigencias_paises[i].id_exigencia;
									checklistModel.registrarChecklistUsuario(id_usuario, id_exigencia, function(error, result){});
								}
								paisModel.getPaises(function(error, paises){
									for (var i=0; i<paises.length; i++) {
										var id_pais = paises[i].id_pais;
										favoritoModel.registrarFavoritosUsuario(id_usuario, id_pais, function(error, result){});
									}
									app.app.controllers.login.login_usuario(app, req, res);
								});
							});
						});		
					} else {

						checklistModel.getExigenciasPaises(function(error, exigencias_paises){
							var id_usuario = usuario_cadastrado[0].id_usuario;
							for (var i=0; i<exigencias_paises.length; i++) {
								var id_exigencia = exigencias_paises[i].id_exigencia;
								checklistModel.registrarChecklistUsuario(id_usuario, id_exigencia, function(error, result){});
							}
							app.app.controllers.login.login_usuario(app, req, res);
						});
					}
				});
			});
		}
	});
}