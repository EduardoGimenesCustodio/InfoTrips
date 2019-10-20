function FavoritoDAO(connection){
	this._connection = connection;
}

	FavoritoDAO.prototype.getFavoritosUsuario = function(email, callback){
		this._connection.query('select nome_pais, bandeira_pais, id_favorito, isfavorite_favorito from favorito inner join pais on pais_favorito = id_pais inner join usuario on usuario_favorito = id_usuario where usuario_favorito = (select id_usuario from usuario where email_usuario = "'+ email +'") AND isfavorite_favorito = true', callback);
	}

	FavoritoDAO.prototype.registrarFavoritosUsuario = function(id_usuario, id_pais, callback){
		this._connection.query('insert into favorito(usuario_favorito, pais_favorito) values('+ id_usuario +', '+ id_pais +')', callback);
	}

	FavoritoDAO.prototype.consultarStatusFavorito = function(favoritos, callback){
		this._connection.query('select isfavorite_favorito from favorito where id_favorito = '+ favoritos.id_favorito, callback);
	}

	FavoritoDAO.prototype.atualizarFavorito = function(favoritos, isfavorite_favorito, callback){
		if (isfavorite_favorito == true) {
			this._connection.query('update favorito set isfavorite_favorito = null where id_favorito = '+ favoritos.id_favorito, callback);
		} else {
			this._connection.query('update favorito set isfavorite_favorito = true where id_favorito = '+ favoritos.id_favorito, callback);
		}
	}

module.exports = function(){
	return FavoritoDAO;
}