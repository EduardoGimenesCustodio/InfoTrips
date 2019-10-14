module.exports.perfil = function(app, req, res){

    if (req.session.loggedin) {
        var email = req.session.email;
	    var connection = app.config.dbConnection();
	    var usuarioModel = new app.app.models.UsuarioDAO(connection);

	    usuarioModel.getUsuario(email, function(error, usuario) {
			usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
				res.render('perfil/perfil', {usuario: usuario, foto_usuario: foto_usuario});
			});
	    });
	} else {
		res.redirect('/login');
	}
}

module.exports.logout_usuario = function(app, req, res){
    req.session.destroy();
    res.redirect('/');
}