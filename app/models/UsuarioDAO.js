function UsuarioDAO(connection){
	this._connection = connection;
}

	UsuarioDAO.prototype.getUsuario = function(email, callback){
		this._connection.query('select * from usuario where email_usuario = ?', email, callback);
	}

	UsuarioDAO.prototype.getFotoUsuario = function(email, callback){
		this._connection.query('select nome_foto from foto where usuario_foto = (select id_usuario from usuario where email_usuario = ?)', email, callback);
	}

	UsuarioDAO.prototype.getEmailsUsuarios = function(callback){
		this._connection.query('select email_usuario from usuario', callback);
	}

	UsuarioDAO.prototype.cadastrarUsuario = function(usuario, callback){
		this._connection.query('insert into usuario set ?', usuario, callback);
	}

	UsuarioDAO.prototype.editarUsuario = function(usuario, callback){
		if (usuario.updatesareactive_usuario == null) {
			this._connection.query('update usuario set nome_usuario = "'+ usuario.nome_usuario +'", senha_usuario = "'+ usuario.senha_usuario +'", updatesareactive_usuario = null where email_usuario = "'+ usuario.email_usuario +'"', callback);
		} else {
			this._connection.query('update usuario set nome_usuario = "'+ usuario.nome_usuario +'", senha_usuario = "'+ usuario.senha_usuario +'", updatesareactive_usuario = true where email_usuario = "'+ usuario.email_usuario +'"', callback);
		}
	}

	UsuarioDAO.prototype.cadastrarFotoUsuario = function(usuario_cadastrado, foto_usuario, callback){
		this._connection.query('insert into foto(nome_foto, usuario_foto) values("' + foto_usuario + '", '+ usuario_cadastrado[0].id_usuario +')', callback);
	}

	UsuarioDAO.prototype.editarFotoUsuario = function(usuario_cadastrado, foto_usuario, callback){
		this._connection.query('update foto set nome_foto = "' + foto_usuario + '" where usuario_foto = ' + usuario_cadastrado[0].id_usuario, callback);
	}

	UsuarioDAO.prototype.loginUsuario = function(email, senha, callback) {
		this._connection.query('select * from usuario where email_usuario = ? AND senha_usuario = ?', [email, senha], callback);
	}

module.exports = function(){
	return UsuarioDAO;
}