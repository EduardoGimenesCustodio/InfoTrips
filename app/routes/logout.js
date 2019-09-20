module.exports = function(app, passport){
	app.get('/logout', function(req,res){
        app.app.controllers.logout.logout(app, req, res);
    });
}