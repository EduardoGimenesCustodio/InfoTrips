module.exports.busca = function(app, req, res){

	var pais_busca = req.body.pais_busca;
	var connection = app.config.dbConnection();
	var paisModel = new app.app.models.PaisDAO(connection);

	paisModel.buscarPais(pais_busca, function(error, result) {
		res.render('busca/busca', {pais: result});
	});
}