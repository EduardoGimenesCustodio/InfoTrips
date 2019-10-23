module.exports.favoritos = function(app, req, res){
	if (!req.session.loggedin) {
        res.redirect('/?notificacao=Faça Login');
        return;
    }

    if (req.query.pagina_anterior) {
        if (req.query.pagina_anterior === '/') {
            var pagina_anterior = '/';
        } else {
            if (req.query.pagina_anterior === '/perfil') {
                var pagina_anterior = '/perfil';
            }
        }
    } else {
        res.redirect('/');
        return;
    }
    
    var email = req.session.email;
	var connection = app.config.dbConnection();
    var usuarioModel = new app.app.models.UsuarioDAO(connection);
    var historicoModel = new app.app.models.HistoricoDAO(connection);
    var favoritoModel = new app.app.models.FavoritoDAO(connection);

    

    usuarioModel.getUsuario(email, function(error, usuario) {
        usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
            historicoModel.getHistoricoUsuario(email, function(error, dados_historico_usuario) {
                favoritoModel.getFavoritosUsuario(email, function(error, dados_favoritos_usuario) {
                    res.render('favoritos/favoritos', {usuario: usuario, foto_usuario: foto_usuario, historico_usuario: dados_historico_usuario, favoritos_usuario: dados_favoritos_usuario, pagina_anterior: pagina_anterior});
                });
            });
        });
    });
}

module.exports.atualizar_favoritos = function(app, req, res){
    if (req.body){
        var favoritos = req.body;
	} else {
		res.redirect('/');
		return;
	}

	var connection = app.config.dbConnection();
	var favoritoModel = new app.app.models.FavoritoDAO(connection);

    var nome_pais = favoritos.nome_pais;
    var nome_tela = favoritos.nome_tela;

	favoritoModel.consultarStatusFavorito(favoritos, function(error, result){
		var isfavorite_favorito = result[0].isfavorite_favorito;
		favoritoModel.atualizarFavorito(favoritos, isfavorite_favorito, function(error, result){
            if (nome_tela === '/busca') {
                var pais_pesquisado = favoritos.pais_pesquisado;
                res.redirect('/busca?pais_busca='+ pais_pesquisado);
            } else {
                if (nome_tela === '/favoritos') {
                    var tela_anterior = favoritos.tela_anterior;
                    res.redirect('/favoritos?pagina_anterior='+ tela_anterior);
                } else {
                    res.redirect(nome_tela +'?nome_pais='+ nome_pais);
                }
            }
		});
	});
}