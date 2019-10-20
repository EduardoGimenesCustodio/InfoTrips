function FavoritoDAO(connection){
	this._connection = connection;
}

	FavoritoDAO.prototype.registrarFavoritosUsuario = function(id_usuario, id_pais, callback){
		this._connection.query('insert into favorito(usuario_favorito, pais_favorito) values('+ id_usuario +', '+ id_pais +')', callback);
	}

	FavoritoDAO.prototype.consultarStatusFavorito = function(favoritos_usuario, callback){
		this._connection.query('select isfavorite_favorito from favorito where id_favorito = '+ favoritos_usuario.id_favorito, callback);
	}

	FavoritoDAO.prototype.atualizarFavorito = function(favoritos_usuario, isfavorite_favorito, callback){
		if (isfavorite_favorito == true) {
			this._connection.query('update favorito set isfavorite_favorito = null where id_favorito = '+ favoritos_usuario.id_favorito, callback);
		} else {
			this._connection.query('update favorito set isfavorite_favorito = true where id_favorito = '+ favoritos_usuario.id_favorito, callback);
		}
	}

module.exports = function(){
	return FavoritoDAO;
}