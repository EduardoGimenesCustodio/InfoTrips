module.exports.pais = function(app, req, res){

	var connection = app.config.dbConnection();

	var paisModel = new app.app.models.PaisDAO(connection);

	if (req.query.nome_pais){
		var nome_pais = req.query;
	} else {
		res.redirect('/busca');
		return;
	}

	paisModel.getPais(nome_pais, function(error, dados_pais){
		paisModel.getExigenciasPais(nome_pais, function(error, dados_exigencias_pais){
			paisModel.getEmbaixadaBrasil(nome_pais, function(error, dados_embaixada_brasil){
				paisModel.getEmbaixadaPais(nome_pais, function(error, dados_embaixada_pais){
					paisModel.getConsuladosBrasil(nome_pais, function(error, dados_consulados_brasil){
						paisModel.getConsuladosPais(nome_pais, function(error, dados_consulados_pais){
							paisModel.getVistosPais(nome_pais, function(error, dados_vistos_pais){
								paisModel.getMoedasPais(nome_pais, function(error, dados_moedas_pais){
									paisModel.getLinguasPais(nome_pais, function(error, dados_linguas_pais){
										paisModel.getAlertasPais(nome_pais, function(error, dados_alertas_pais){
											if (req.session.loggedin) {
												var email = req.session.email;
												var usuarioModel = new app.app.models.UsuarioDAO(connection);
												usuarioModel.getUsuario(email, function(error, usuario) {
													usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {	
														res.render('pais/pais', {pais: dados_pais, exigencias_pais: dados_exigencias_pais, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais, alertas_pais: dados_alertas_pais, usuario: usuario, foto_usuario: foto_usuario, validacao: {}});
													});
												});
											} else {
												res.render('pais/pais', {pais: dados_pais, exigencias_pais: dados_exigencias_pais, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais, alertas_pais: dados_alertas_pais, usuario: {}, foto_usuario: {}, validacao: {}});
											}
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

module.exports.checklist = function(app, req, res){

	var connection = app.config.dbConnection();

	var checklistModel = new app.app.models.ChecklistDAO(connection);
	var paisModel = new app.app.models.PaisDAO(connection);

	if (req.query.nome_pais){
		var nome_pais = req.query;
	} else {
		res.redirect('/');
		return;
	}

	if (req.session.loggedin) {
		var email = req.session.email;
		var usuarioModel = new app.app.models.UsuarioDAO(connection);
		paisModel.getPais(nome_pais, function(error, dados_pais){
			usuarioModel.getUsuario(email, function(error, usuario) {
				usuarioModel.getFotoUsuario(email, function(error, foto_usuario) {
					checklistModel.getChecklistPais(email, nome_pais, function(error, dados_checklist){
						res.render('pais/checklist', {pais: dados_pais, usuario: usuario, foto_usuario: foto_usuario, checklist: dados_checklist});
					});
				});
			});
		});
	} else {
		var erro = 'Faça o login para acessar sua checklist desse país';

		paisModel.getPais(nome_pais, function(error, dados_pais){
			paisModel.getExigenciasPais(nome_pais, function(error, dados_exigencias_pais){
				paisModel.getEmbaixadaBrasil(nome_pais, function(error, dados_embaixada_brasil){
					paisModel.getEmbaixadaPais(nome_pais, function(error, dados_embaixada_pais){
						paisModel.getConsuladosBrasil(nome_pais, function(error, dados_consulados_brasil){
							paisModel.getConsuladosPais(nome_pais, function(error, dados_consulados_pais){
								paisModel.getVistosPais(nome_pais, function(error, dados_vistos_pais){
									paisModel.getMoedasPais(nome_pais, function(error, dados_moedas_pais){
										paisModel.getLinguasPais(nome_pais, function(error, dados_linguas_pais){
											paisModel.getAlertasPais(nome_pais, function(error, dados_alertas_pais){
												res.render('pais/pais', {pais: dados_pais, exigencias_pais: dados_exigencias_pais, embaixada_brasil: dados_embaixada_brasil, embaixada_pais: dados_embaixada_pais, consulados_brasil: dados_consulados_brasil, consulados_pais: dados_consulados_pais, vistos_pais: dados_vistos_pais, moedas_pais: dados_moedas_pais, linguas_pais: dados_linguas_pais, alertas_pais: dados_alertas_pais, usuario: {}, foto_usuario: {}, validacao: erro});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
}

module.exports.atualizar_checklist = function(app, req, res){

	if (req.body){
		var checklist_usuario = req.body;
	} else {
		res.redirect('/');
		return;
	}

	var connection = app.config.dbConnection();
	var checklistModel = new app.app.models.ChecklistDAO(connection);

	var nome_pais = checklist_usuario.nome_pais;

	checklistModel.consultarStatusChecklist(checklist_usuario, function(error, result){
		var isdone_checklist = result[0].isdone_checklist;
		checklistModel.atualizarChecklist(checklist_usuario, isdone_checklist, function(error, result){
			res.redirect('/checklist?nome_pais='+ nome_pais);
		});
	});

}