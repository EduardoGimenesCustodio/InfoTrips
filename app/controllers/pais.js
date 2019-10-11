module.exports.pais = function(app, req, res){

	var connection = app.config.dbConnection();

	var paisModel = new app.app.models.PaisDAO(connection);

	if (req.query.nome_pais){
		var nome_pais = req.query;
	} else {
		res.redirect('/busca');
		return;
	}

	if (req.session.loggedin) {
        var email = req.session.email;
		var usuarioModel = new app.app.models.UsuarioDAO(connection);
		
		paisModel.getPais(nome_pais, function(error, dados_pais){
			paisModel.getExigencias(nome_pais, function(error, dados_exigencias){
				paisModel.getEmbaixadaBrasil(nome_pais, function(error, dados_embaixada_brasil){
					paisModel.getEmbaixadaPais(nome_pais, function(error, dados_embaixada_pais){
						paisModel.getConsuladosBrasil(nome_pais, function(error, dados_consulados_brasil){
							paisModel.getConsuladosPais(nome_pais, function(error, dados_consulados_pais){
								paisModel.getVistosPais(nome_pais, function(error, dados_vistos_pais){
									paisModel.getMoedasPais(nome_pais, function(error, dados_moedas_pais){
										paisModel.getLinguasPais(nome_pais, function(error, dados_linguas_pais){
											paisModel.getAlertasPais(nome_pais, function(error, dados_alertas_pais){
												usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
													res.render('pais/pais', {pais: dados_pais, exigencias_pais: dados_exigencias, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais, alertas_pais: dados_alertas_pais, foto_usuario: foto_usuario});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		
	} else {
		paisModel.getPais(nome_pais, function(error, dados_pais){
			paisModel.getExigencias(nome_pais, function(error, dados_exigencias){
				paisModel.getEmbaixadaBrasil(nome_pais, function(error, dados_embaixada_brasil){
					paisModel.getEmbaixadaPais(nome_pais, function(error, dados_embaixada_pais){
						paisModel.getConsuladosBrasil(nome_pais, function(error, dados_consulados_brasil){
							paisModel.getConsuladosPais(nome_pais, function(error, dados_consulados_pais){
								paisModel.getVistosPais(nome_pais, function(error, dados_vistos_pais){
									paisModel.getMoedasPais(nome_pais, function(error, dados_moedas_pais){
										paisModel.getLinguasPais(nome_pais, function(error, dados_linguas_pais){
											paisModel.getAlertasPais(nome_pais, function(error, dados_alertas_pais){
												res.render('pais/pais', {pais: dados_pais, exigencias_pais: dados_exigencias, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais, alertas_pais: dados_alertas_pais, foto_usuario: {}});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
}