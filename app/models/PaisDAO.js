function PaisDAO(connection){
	this._connection = connection;
}

	PaisDAO.prototype.getPais = function(nome_pais, callback){
		this._connection.query('select * from pais where nome_pais = "' + nome_pais.nome_pais + '"', callback);
	}

	PaisDAO.prototype.getExigenciasPais = function(nome_pais, callback){
		this._connection.query('select * from exigencia where pais_exigencia = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getEmbaixadaBrasil = function(nome_pais, callback){
		this._connection.query('select * from embaixada where pais_sede_embaixada = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getEmbaixadaPais = function(nome_pais, callback){
		this._connection.query('select * from embaixada where pais_representado_embaixada = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getConsuladosBrasil = function(nome_pais, callback){
		this._connection.query('select * from consulado where pais_sede_consulado = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getConsuladosPais = function(nome_pais, callback){
		this._connection.query('select * from consulado where pais_representado_consulado = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getVistosPais = function(nome_pais, callback){
		this._connection.query('select * from visto where pais_visto = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")', callback);
	}

	PaisDAO.prototype.getMoedasPais = function(nome_pais, callback){
		this._connection.query('select nome_moeda from moeda where id_moeda in (select moeda_moeda_pais from moeda_pais where pais_moeda_pais = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '"))', callback);
	}

	PaisDAO.prototype.getLinguasPais = function(nome_pais, callback){
		this._connection.query('select nome_lingua from lingua where id_lingua in (select lingua_lingua_pais from lingua_pais where pais_lingua_pais = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '"))', callback);
	}

	PaisDAO.prototype.getAlertasPais = function(nome_pais, callback){
		this._connection.query('select titulo_alerta, date_format(data_alerta, "%d/%m/%Y") as data_alerta, descricao_alerta from alerta where id_alerta in (select alerta_alerta_pais from alerta_pais where pais_alerta_pais = (select id_pais from pais where nome_pais = "' + nome_pais.nome_pais + '")) order by(data_alerta) desc', callback);
	}

	PaisDAO.prototype.buscarPais = function(pais_busca, callback){
		this._connection.query('select id_pais, nome_pais, bandeira_pais from pais where nome_pais like ?', '%' + pais_busca + '%', callback);
	}

module.exports = function(){
	return PaisDAO;
}