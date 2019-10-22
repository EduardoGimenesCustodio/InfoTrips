module.exports.index = function(app, req, res){
	if (req.session.loggedin) {
        var email = req.session.email;
	    var connection = app.config.dbConnection();
	    var usuarioModel = new app.app.models.UsuarioDAO(connection);

		usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {

			if (req.query.notificacao) {
				if (req.query.notificacao === 'Login Realizado') {
					var mensagem_inicio = 'Você entrou em sua conta. Seja bem-vindo(a)!';
				} else {
					if (req.query.notificacao === 'Perfil Editado') {
						var mensagem_inicio = "Perfil editado com sucesso!";
					}
				}
				res.render('home/index', {mensagem: mensagem_inicio, foto_usuario: foto_usuario});
			} else {
				res.render('home/index', {mensagem: {}, foto_usuario: foto_usuario});
			}
		});
	} else {
		res.render('home/index', {mensagem: {}, foto_usuario: {}});
	}
}