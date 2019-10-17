module.exports = function(app){
	app.get('/favoritos', function(req,res){
		app.app.controllers.favoritos.favoritos(app, req, res);
    });
    
}