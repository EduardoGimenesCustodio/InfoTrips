function UsuarioDAO(connection){
	this._connection = connection;
}

	UsuarioDAO.prototype.getUsuario = function(email, callback){
		this._connection.query('select * from usuario where email_usuario = ?', email, callback);
	}

	UsuarioDAO.prototype.cadastrarUsuario = function(usuario, callback){
		this._connection.query('insert into usuario set ?', usuario, callback);
	}

	UsuarioDAO.prototype.loginUsuario = function(email, senha, callback) {
		this._connection.query('select * from usuario where email_usuario = ? AND senha_usuario = ?', [email, senha], callback);
	}

module.exports = function(){
	return UsuarioDAO;
}