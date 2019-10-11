module.exports.index = function(app, req, res){
	if (req.session.loggedin) {
        var email = req.session.email;
	    var connection = app.config.dbConnection();
	    var usuarioModel = new app.app.models.UsuarioDAO(connection);

		usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
			res.render('home/index', {foto_usuario: foto_usuario});
		});
	} else {
		res.render('home/index', {foto_usuario: {}});
	}
}