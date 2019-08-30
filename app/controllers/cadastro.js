module.exports.cadastro = function(app, req, res){
	res.render('cadastro/cadastro');
}

module.exports.cadastrar_usuario = function(app, req, res){
	var usuario = req.body;

	var connection = app.config.dbConnection();
	var usuarioModel = new app.app.models.UsuarioDAO(connection);
		
	usuarioModel.cadastrarUsuario(usuario, function(error, result){
		res.redirect('/login');
	});

}