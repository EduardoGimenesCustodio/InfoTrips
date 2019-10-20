module.exports.favoritos = function(app, req, res){
	if (!req.session.loggedin) {
        var mensagem = 'Faça o login para acessar sua lista de países favoritos';
        res.render('home/index', {mensagem: mensagem, foto_usuario: {}});
        return;
    }
    
    var email = req.session.email;
	var connection = app.config.dbConnection();
    var usuarioModel = new app.app.models.UsuarioDAO(connection);
    var historicoModel = new app.app.models.HistoricoDAO(connection);

    usuarioModel.getUsuario(email, function(error, usuario) {
        usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
            historicoModel.getHistoricoUsuario(email, function(error, dados_historico_usuario) {
                res.render('favoritos/favoritos', {usuario: usuario, foto_usuario: foto_usuario, historico_usuario: dados_historico_usuario});
            });
        });
    });
}

module.exports.atualizar_favoritos = function(app, req, res){
    if (req.body){
        var favoritos_usuario = req.body;
	} else {
		res.redirect('/');
		return;
	}

	var connection = app.config.dbConnection();
	var favoritoModel = new app.app.models.FavoritoDAO(connection);

    var nome_pais = favoritos_usuario.nome_pais;
    var nome_tela = favoritos_usuario.nome_tela;

	favoritoModel.consultarStatusFavorito(favoritos_usuario, function(error, result){
		var isfavorite_favorito = result[0].isfavorite_favorito;
		favoritoModel.atualizarFavorito(favoritos_usuario, isfavorite_favorito, function(error, result){
            if (nome_tela === '/busca') {
                var pais_pesquisado = favoritos_usuario.pais_pesquisado;
                res.redirect('/busca?pais_busca='+ pais_pesquisado);
            } else {
                res.redirect(nome_tela +'?nome_pais='+ nome_pais);
            }
		});
	});
}