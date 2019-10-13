function ChecklistDAO(connection){
	this._connection = connection;
}

	ChecklistDAO.prototype.getExigenciasPaises = function(callback){
		this._connection.query('select * from exigencia', callback);
	}

	ChecklistDAO.prototype.getChecklistPais = function(email, nome_pais, callback){
		this._connection.query('select nome_exigencia, isdone_checklist, isactive_checklist, isrequired_exigencia from checklist inner join exigencia on exigencia_checklist = id_exigencia inner join usuario on usuario_checklist = id_usuario inner join pais on pais_exigencia = id_pais where email_usuario = "'+ email +'" AND id_pais = (select id_pais from pais where nome_pais = "'+ nome_pais.nome_pais +'")', callback);
	}

	ChecklistDAO.prototype.registrarChecklistUsuario = function(id_usuario, id_exigencia, callback){
		this._connection.query('insert into checklist(usuario_checklist, exigencia_checklist, isactive_checklist) values('+ id_usuario +', '+ id_exigencia +', true)', callback);
	}

module.exports = function(){
	return ChecklistDAO;
}