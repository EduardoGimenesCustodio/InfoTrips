function AdminDAO(connection){
	this._connection = connection;
}

AdminDAO.prototype.getSenhaAdmin = function(email, callback) {
    this._connection.query('select senha_admin from admin where email_admin = ?', email, callback);
}

AdminDAO.prototype.loginAdmin = function(email, callback) {
    this._connection.query('select * from admin where email_admin = ?', email, callback);
}

module.exports = function(){
return AdminDAO;
}