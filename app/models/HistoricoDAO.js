function HistoricoDAO(connection){
	this._connection = connection;
}

    HistoricoDAO.prototype.getHistoricoUsuario = function(email, nome_pais, callback){
		this._connection.query('select nome_pais, bandeira_pais, data_historico from historico inner join pais on pais_historico = id_pais where usuario_historico = (select id_usuario from usuario where email_usuario = "'+ email +'") order by(data_historico) DESC', callback);
	}

    HistoricoDAO.prototype.getHistoricoPais = function(email, nome_pais, callback){
		this._connection.query('select * from historico where usuario_historico = (select id_usuario from usuario where email_usuario = "'+ email +'") and pais_historico = (select id_pais from pais where nome_pais = "'+ nome_pais.nome_pais +'")', callback);
	}

	HistoricoDAO.prototype.inserirRegistroHistorico = function(id_usuario, id_pais, callback){
		this._connection.query('insert into historico(usuario_historico, pais_historico) values('+ id_usuario +', '+ id_pais +')', callback);
    }
    
    HistoricoDAO.prototype.atualizarRegistroHistorico = function(email, nome_pais, callback){
		this._connection.query('update historico set data_historico = (select now()) where usuario_historico = (select id_usuario from usuario where email_usuario = "'+ email +'") and pais_historico = (select id_pais from pais where nome_pais = "'+ nome_pais.nome_pais +'")', callback);
	}

module.exports = function(){
	return HistoricoDAO;
}