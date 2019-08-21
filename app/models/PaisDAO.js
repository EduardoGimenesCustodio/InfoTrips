function PaisDAO(connection){
	this._connection = connection;
}

	PaisDAO.prototype.getPais = function(callback){
		this._connection.query('select * from pais', callback);
	}

module.exports = function(){
	return PaisDAO;
}