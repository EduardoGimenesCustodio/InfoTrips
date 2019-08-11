var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com o DB foi estabelecida');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'InfoTrips'			
	});
}

module.exports = function(){

	console.log('O autoload carregou o módulo de conexão com o DB');
	return connMySQL;

}

///////////////////////////////////


// var postgresql = require('postgresql');

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	return postgresql.createConnection({
// 		host: 'localhost',
// 		user: 'postgres',
// 		password: '123',
// 		database: 'InfoTrips'			
// 	});
// }

////////////////////////////////


// var Postgresql = require('postgresql');

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	var connection = new Postgresql({
// 		user: 'postgres',
// 		host: 'localhost',
// 		database: 'InfoTrips',
// 		password: '123',
// 		port: 5432
// 	});
// 	return connection.connect();
// } 

///////////////////////////////

// var Postgresql = require('pg');

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	Postgresql.setProperty("user", "postgres");
// 	Postgresql.setProperty("host", "localhost");
// 	Postgresql.setProperty("database", "InfoTrips");
// 	Postgresql.setProperty("password", "");
// 	Postgresql.setProperty("port", 5432);
// 	return Postgresql.connect();
// } 

/////////////////////////////////

// var pg = require('pg');
// var connectionString = 'postgres://postgres:123@localhost:5432/InfoTrips';
// var pgClient = new pg.Client(connectionString);

// var connPostgreSQL = function(){
// 	return pgClient.connect();
// }

// var connPostgreSQL = function(){
// 	var config = {
// 		user: 'postgres',
// 		host: 'localhost',
// 		database: 'InfoTrips',
// 		password: '123',
// 		port: 5432,
// 		ssl: true
// 	};
// 	// var connection;
// 	var connection = new Postgresql.Connection(config);
// 	return connection();
// }

///////////////////////////////

// var Postgresql = require('pg');
// var connectionString = 'postgres://postgres:123@localhost:5432/InfoTrips';

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	return Postgresql.connect(connectionString);
// }

////////////////////////////////

// var Postgresql = require('pg');

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	var connectionString = 'postgres://postgres:123@localhost:5432/InfoTrips';
// 	return Postgresql.getConnection(connectionString);
// } 

////////////////////////////////

// var Postgresql = require('pg');
// var connectionString = 'postgressql://postgres:123@localhost:5432/InfoTrips';

// var connection = new Postgresql({
// 	connectionString: connectionString
// });

// var connPostgreSQL = function(){
// 	console.log('Conexão com o DB foi estabelecida');
// 	return connection.connect();
// }

////////////////////////////////

// module.exports = function(){

// 	 console.log('O autoload carregou o módulo de conexão com o DB');
// 	 return connPostgreSQL;

// }

////////////////////////////////
