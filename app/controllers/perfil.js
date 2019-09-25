module.exports.perfil = function(app, req, res){
    if (req.session.loggedin) {
        var email = req.session.email;
	    var connection = app.config.dbConnection();
	    var usuarioModel = new app.app.models.UsuarioDAO(connection);

	    usuarioModel.getUsuario(email, function(error, result) {
		    res.render('perfil/perfil', {usuario: result});
	    });
	} else {
		res.redirect('/login');
	}
}

module.exports.logout_usuario = function(app, req, res){
    req.session.destroy();
    res.redirect('/');
}