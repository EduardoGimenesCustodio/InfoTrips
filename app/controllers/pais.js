module.exports.pais = function(app, req, res){

		var connection = app.config.dbConnection();

		var paisModel = new app.app.models.PaisDAO(connection);

		if (req.query.nome_pais){
			var nome_pais = req.query;
		} else {
			res.redirect('/busca');
			return;
		}

		paisModel.getPais(nome_pais, function(error, dados_pais){
			paisModel.getExigencias(nome_pais, function(error, dados_exigencias){
				paisModel.getEmbaixadaBrasil(nome_pais, function(error, dados_embaixada_brasil){
					paisModel.getEmbaixadaPais(nome_pais, function(error, dados_embaixada_pais){
						paisModel.getConsuladosBrasil(nome_pais, function(error, dados_consulados_brasil){
							paisModel.getConsuladosPais(nome_pais, function(error, dados_consulados_pais){
								paisModel.getVistosPais(nome_pais, function(error, dados_vistos_pais){
									paisModel.getMoedasPais(nome_pais, function(error, dados_moedas_pais){
										paisModel.getLinguasPais(nome_pais, function(error, dados_linguas_pais){
											res.render('pais/pais', {pais: dados_pais, exigencias: dados_exigencias, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais});
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