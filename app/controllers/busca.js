module.exports.busca = function(app, req, res){

	var pais_busca = req.body.pais_busca;
	var connection = app.config.dbConnection();
	var paisModel = new app.app.models.PaisDAO(connection);

	if (req.session.loggedin) {
        var email = req.session.email;
		var usuarioModel = new app.app.models.UsuarioDAO(connection);
		
		paisModel.buscarPais(pais_busca, function(error, result) {
			usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
				res.render('busca/busca', {paises: result, foto_usuario: foto_usuario});
			});
		});
	} else {
		paisModel.buscarPais(pais_busca, function(error, result) {
			res.render('busca/busca', {paises: result, foto_usuario: {}});
		});
	}
}