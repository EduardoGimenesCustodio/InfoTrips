module.exports.busca = function(app, req, res){

	var connection = app.config.dbConnection();

	if (req.body.pais_busca) {
		var pais_busca = req.body.pais_busca;

		var paisModel = new app.app.models.PaisDAO(connection);

		if (req.session.loggedin) {
			var email = req.session.email;
			var usuarioModel = new app.app.models.UsuarioDAO(connection);
			
			paisModel.buscarPais(pais_busca, function(error, result) {
				usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
					if (result.length > 0) {
						res.render('busca/busca', {paises: result, mensagem_busca: {}, foto_usuario: foto_usuario});
					} else {
						var mensagem = 'País não encontrado';
						res.render('busca/busca', {paises: result, mensagem_busca: mensagem, foto_usuario: foto_usuario});
					}
				});
			});
		} else {
			paisModel.buscarPais(pais_busca, function(error, result) {
				if (result.length > 0) {
					res.render('busca/busca', {paises: result, mensagem_busca: {}, foto_usuario: {}});
				} else {
					var mensagem = 'País não encontrado';
					res.render('busca/busca', {paises: result, mensagem_busca: mensagem, foto_usuario: {}});
				}
			});
		}
	} else {
		if (req.session.loggedin) {
			var email = req.session.email;
			var usuarioModel = new app.app.models.UsuarioDAO(connection);
			
			usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
				res.render('busca/busca', {paises: {}, mensagem_busca: {}, foto_usuario: foto_usuario});
			});
		} else {
			res.render('busca/busca', {paises: {}, mensagem_busca: {}, foto_usuario: {}});
		}
	}
}