function ChecklistDAO(connection){
	this._connection = connection;
}

	ChecklistDAO.prototype.getExigenciasPaises = function(callback){
		this._connection.query('select * from exigencia', callback);
	}

	ChecklistDAO.prototype.getChecklistPais = function(id_pais, callback){
		this._connection.query('select * from exigencia where pais_exigencia = ?', id_pais, callback);
	}

	ChecklistDAO.prototype.registrarChecklistUsuario = function(id_usuario, id_exigencia, callback){
		this._connection.query('insert into checklist(usuario_checklist, exigencia_checklist, isactive_checklist) values('+ id_usuario +', '+ id_exigencia +', 1)', callback);
	}

module.exports = function(){
	return ChecklistDAO;
}