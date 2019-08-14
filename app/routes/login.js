module.exports = function(app){
	app.get('/login', function(req,res){
		app.app.controllers.login.login(app, req, res);
	});
}