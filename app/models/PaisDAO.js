function PaisDAO(connection){
	this._connection = connection;
}

	PaisDAO.prototype.getPais = function(id_pais, callback){
		this._connection.query('select * from pais where id_pais=' + id_pais.id_pais, callback);
		// var dados_exigencia = this._connection.query('select * from exigencia where pais_exigencia=' + id_pais.id_pais, callback);
	}

	PaisDAO.prototype.buscarPais = function(pais_busca, callback){
		this._connection.query('select id_pais, nome_pais from pais where nome_pais like ?', '%' + pais_busca + '%', callback);
	}

module.exports = function(){
	return PaisDAO;
}