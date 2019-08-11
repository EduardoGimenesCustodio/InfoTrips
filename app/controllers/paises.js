
module.exports.paises = function(app, req, res){

		var connection = app.config.dbConnection(); //recebemos o app por parâmetro, então podemos
		// recuperar o módulo dentro do app. Com isso diminuímos a necessidade de ter requires nos
		// projetos

		var paisesModel = new app.app.models.PaisesDAO(connection);
		// app.app significa: o primeiro é a aplicação, o segundo é a pasta app

	 	paisesModel.getPaises(function(error, result){
	 		res.render('paises/paises', {pais: result});

	 	});

}

module.exports.pais = function(app, req, res){

		var connection = app.config.dbConnection(); //recebemos o app por parâmetro, então podemos
		// recuperar o módulo dentro do app.

		var paisesModel = new app.app.models.PaisesDAO(connection);

	 	paisesModel.getPais(function(error, result){
	 		res.render('paises/pais', {pais: result});

	 	});
	
}