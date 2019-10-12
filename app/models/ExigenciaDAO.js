function ExigenciaDAO(connection){
	this._connection = connection;
}

	ExigenciaDAO.prototype.getExigencias = function(callback){
		this._connection.query('select * from exigencia', callback);
	}

	ExigenciaDAO.prototype.getExigenciasPais = function(id_pais, callback){
		this._connection.query('select * from exigencia where pais_exigencia = ?', id_pais, callback);
	}

module.exports = function(){
	return ExigenciaDAO;
}