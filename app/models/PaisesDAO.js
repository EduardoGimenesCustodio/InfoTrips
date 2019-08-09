function PaisesDAO(connection){
	this._connection = connection;
}

	PaisesDAO.prototype.getPaises = function(callback){
		this._connection.query('select nome_pais from pais', callback);
	}

	PaisesDAO.prototype.getPais = function(callback){
		this._connection.query('select nome_pais, informacoes_turisticas_pais from pais where id_pais = 1', callback);
	}

module.exports = function(){
	return PaisesDAO;
}