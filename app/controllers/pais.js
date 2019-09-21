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
						res.render('pais/pais', {pais: dados_pais, exigencias: dados_exigencias, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais});
					});
				});
			});
		});
		
}