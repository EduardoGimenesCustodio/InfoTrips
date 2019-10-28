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
			var crypto = require('crypto');
			var alg = 'aes-256-ctr';
			var pwd = 'abcdabcbcbcdabcdabadabcdabcdabcd';
			
			function decrypt(senha) {
				var parts = senha.split(':');
				var decipher = crypto.createDecipheriv(alg, pwd, new Buffer(parts[0], 'hex'));
				var plain = decipher.update(parts[1], 'hex', 'utf8') + decipher.final('utf8');
				return plain;
			}

			usuario[0].senha_usuario = decrypt(usuario[0].senha_usuario);

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

	var crypto = require('crypto');
	var alg = 'aes-256-ctr';
	var pwd = 'abcdabcbcbcdabcdabadabcdabcdabcd';

	function crypt(senha) {
		var iv = crypto.randomBytes(16)
		var cipher = crypto.createCipheriv(alg, pwd, iv)
		var crypted = cipher.update(senha, 'utf8', 'hex') + cipher.final('hex')
		return iv.toString('hex')+':'+crypted;
	}

	var senha = usuario.senha_usuario;
	usuario.senha_usuario = crypt(senha);

	usuarioModel.editarUsuario(usuario, function(error, result){
		if (foto_usuario) {
			usuarioModel.getUsuario(usuario.email_usuario, function(error, result){
				var usuario_cadastrado = result;
				var email = usuario_cadastrado[0].email_usuario;
				usuarioModel.getFotoUsuario(email, function(error, foto_usuario_cadastrado) {
					if (foto_usuario_cadastrado.length > 0) {
						usuarioModel.editarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){
							res.redirect('/?notificacao=Perfil Editado');
						});
					} else {
						usuarioModel.cadastrarFotoUsuario(usuario_cadastrado, foto_usuario, function(error, result){
							res.redirect('/?notificacao=Perfil Editado');
						});
					}
				});
			});
		} else {
			res.redirect('/?notificacao=Perfil Editado');
		}
	});
}