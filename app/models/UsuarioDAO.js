function UsuarioDAO(connection){
	this._connection = connection;
}

	UsuarioDAO.prototype.cadastrarUsuario = function(usuario, callback){
		this._connection.query('insert into usuario set ?', usuario, callback);
	}

	UsuarioDAO.prototype.getUsuario = function(id_usuario, callback) {
		this._connection.query('select * from usuario where id_usuario=' + id_usuario.id_usuario, callback)
	}

module.exports = function(){
	return UsuarioDAO;
}