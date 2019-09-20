module.exports.logout = function(app, req, res){
	req.logout();
    res.redirect('/');
}