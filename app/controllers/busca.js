module.exports.busca = function(app, req, res){

	var connection = app.config.dbConnection();

	if ((req.body.pais_busca) || (req.query.pais_busca)) {
		if (req.body.pais_busca) {
			var pais_busca = req.body.pais_busca;
		} else {
			if (req.query.pais_busca) {
				var pais_busca = req.query.pais_busca;
			}
		}

		if ((pais_busca === 'eua') || (pais_busca === 'EUA')) {
			pais_busca = 'Estados Unidos da América';
		}

		var paisModel = new app.app.models.PaisDAO(connection);

		if (req.session.loggedin) {
			var email = req.session.email;
			var usuarioModel = new app.app.models.UsuarioDAO(connection);
			
			paisModel.buscarPaisComFavoritos(pais_busca, email, function(error, result) {
				usuarioModel.getUsuario(email, function(error, dados_usuario) {
					usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
						if (result.length > 0) {
							res.render('busca/busca', {paises: result, mensagem_busca: {}, usuario: dados_usuario, foto_usuario: foto_usuario, pais_pesquisado: pais_busca});
						} else {
							var mensagem = 'País não encontrado';
							res.render('busca/busca', {paises: {}, mensagem_busca: mensagem, usuario: dados_usuario, foto_usuario: foto_usuario, pais_pesquisado: pais_busca});
						}
					});
				});
			});
		} else {
			paisModel.buscarPais(pais_busca, function(error, result) {
				if (result.length > 0) {
					res.render('busca/busca', {paises: result, mensagem_busca: {}, usuario: {}, foto_usuario: {}, pais_pesquisado: pais_busca});
				} else {
					var mensagem = 'País não encontrado';
					res.render('busca/busca', {paises: {}, mensagem_busca: mensagem, usuario: {}, foto_usuario: {}, pais_pesquisado: pais_busca});
				}
			});
		}
	} else {
		if (req.session.loggedin) {
			var email = req.session.email;
			var usuarioModel = new app.app.models.UsuarioDAO(connection);
			
			usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
				res.render('busca/busca', {paises: {}, mensagem_busca: {}, usuario: {}, foto_usuario: foto_usuario, pais_pesquisado: {}});
			});
		} else {
			res.render('busca/busca', {paises: {}, mensagem_busca: {}, usuario: {}, foto_usuario: {}, pais_pesquisado: {}});
		}
	}
}