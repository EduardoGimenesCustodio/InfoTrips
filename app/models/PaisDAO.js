function PaisDAO(connection){
	this._connection = connection;
}

	PaisDAO.prototype.getPais = function(nome_pais, callback){
		this._connection.query('select * from pais where nome_pais = "' + nome_pais.nome_pais + '"', callback);
	}

	PaisDAO.prototype.getExigencias = function(nome_pais, callback){
		this._connection.query('select * from exigencia where pais_exigencia = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getEmbaixadaBrasil = function(nome_pais, callback){
		this._connection.query('select * from embaixada where pais_sede_embaixada = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getEmbaixadaPais = function(nome_pais, callback){
		this._connection.query('select * from embaixada where pais_representado_embaixada = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.buscarPais = function(pais_busca, callback){
		this._connection.query('select id_pais, nome_pais, bandeira_pais from pais where nome_pais like ?', '%' + pais_busca + '%', callback);
	}

module.exports = function(){
	return PaisDAO;
}