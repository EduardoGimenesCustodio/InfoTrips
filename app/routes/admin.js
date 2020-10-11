module.exports = function(app){
	app.get('/admin', function(req,res){
		app.app.controllers.admin.admin(app, req, res);
    });
    
    app.post('/admin/sair', function(req,res){
		app.app.controllers.admin.logout_admin(app, req, res);
	});
}