module.exports = function(app){
	app.get('/favoritos', function(req,res){
		app.app.controllers.favoritos.favoritos(app, req, res);
  });

	app.post('/atualizar/favoritos', function(req,res){
		app.app.controllers.favoritos.atualizar_favoritos(app, req, res);
  });
}