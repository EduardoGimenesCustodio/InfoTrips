module.exports = function(app){

	app.get('/pais', function(req,res){
		app.app.controllers.pais.pais(app, req, res);
	});

	app.get('/checklist', function(req,res){
		app.app.controllers.pais.checklist(app, req, res);
	});

	app.post('/atualizar/checklist', function(req,res){
		app.app.controllers.pais.atualizar_checklist(app, req, res);
	});

	app.post('/ativacao/checklist', function(req,res){
		app.app.controllers.pais.ativacao_checklist(app, req, res);
	});

}