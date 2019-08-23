module.exports.pais = function(app, req, res){

		var connection = app.config.dbConnection(); //recebemos o app por parâmetro, então podemos
		// recuperar o módulo dentro do app.

		var paisModel = new app.app.models.PaisDAO(connection);

		if (req.query.id_pais){
			var id_pais = req.query;
		} else {
			res.redirect('/busca');
			return;
		}

	 	paisModel.getPais(id_pais, function(error, result){
	 		res.render('pais/pais', {pais: result});
		 });
	
}