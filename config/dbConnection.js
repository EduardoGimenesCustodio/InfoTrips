var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com o DB foi estabelecida');
	return mysql.createConnection({
		host: 'mysql669.umbler.com',
		user: 'infotrips',
		password: 'rootinfotrips',
		database: 'infotrips'			
	});
}

module.exports = function(){

	console.log('O autoload carregou o módulo de conexão com o DB');
	return connMySQL;

}