module.exports.pais = function(app, req, res){

		var connection = app.config.dbConnection(); //recebemos o app por parâmetro, então podemos
		// recuperar o módulo dentro do app.

		var paisModel = new app.app.models.PaisDAO(connection);

	 	paisModel.getPais(function(error, result){
	 		res.render('pais/pais', {pais: result});

	 	});
	
}