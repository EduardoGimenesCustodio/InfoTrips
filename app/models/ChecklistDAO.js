function ChecklistDAO(connection){
	this._connection = connection;
}

	ChecklistDAO.prototype.getExigenciasPaises = function(callback){
		this._connection.query('select * from exigencia', callback);
	}

	ChecklistDAO.prototype.getChecklistPais = function(email, nome_pais, callback){
		this._connection.query('select id_checklist, nome_exigencia, isdone_checklist, isactive_checklist, isrequired_exigencia, descricao_exigencia from checklist inner join exigencia on exigencia_checklist = id_exigencia inner join usuario on usuario_checklist = id_usuario inner join pais on pais_exigencia = id_pais where email_usuario = "'+ email +'" AND id_pais = (select id_pais from pais where nome_pais = "'+ nome_pais.nome_pais +'") order by isactive_checklist DESC, nome_exigencia ASC', callback);
	}

	ChecklistDAO.prototype.registrarChecklistUsuario = function(id_usuario, id_exigencia, callback){
		this._connection.query('insert into checklist(usuario_checklist, exigencia_checklist, isactive_checklist) values('+ id_usuario +', '+ id_exigencia +', true)', callback);
	}

	ChecklistDAO.prototype.consultarStatusChecklist = function(checklist_usuario, callback){
		this._connection.query('select isdone_checklist from checklist where id_checklist = '+ checklist_usuario.id_checklist, callback);
	}

	ChecklistDAO.prototype.atualizarChecklist = function(checklist_usuario, isdone_checklist, callback){
		if (isdone_checklist == true) {
			this._connection.query('update checklist set isdone_checklist = null where id_checklist = '+ checklist_usuario.id_checklist, callback);
		} else {
			this._connection.query('update checklist set isdone_checklist = true where id_checklist = '+ checklist_usuario.id_checklist, callback);
		}
	}

	ChecklistDAO.prototype.consultarEstadoChecklist = function(checklist_usuario, callback){
		this._connection.query('select isactive_checklist from checklist where id_checklist = '+ checklist_usuario.id_checklist, callback);
	}

	ChecklistDAO.prototype.ativacaoChecklist = function(checklist_usuario, isactive_checklist, callback){
		if (isactive_checklist == true) {
			this._connection.query('update checklist set isactive_checklist = null where id_checklist = '+ checklist_usuario.id_checklist, callback);
		} else {
			this._connection.query('update checklist set isactive_checklist = true where id_checklist = '+ checklist_usuario.id_checklist, callback);
		}
	}

module.exports = function(){
	return ChecklistDAO;
}