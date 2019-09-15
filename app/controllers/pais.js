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
			res.render('pais/pais', {pais: dados_pais, exigencia: {}});
		});
		
}