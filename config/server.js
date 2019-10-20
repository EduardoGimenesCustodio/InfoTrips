var express = require('express');
var session = require('express-session');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); // importação do método expressValidator

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
//aqui parametrizamos como o bodyParser vai tratar os formuklários.
//o parametro extend:true vai permitir que seja implementada através de Json
//as url codificadas.

app.use(expressValidator());
// aqui colocamos em execução o expressValidator

// app.use(multer);

// app.use(path);

consign()

	.include('app/routes')

	.then('config/dbConnection.js') // incluída a conexão com o banco no consign
	.then('app/models') // inclui o diretório de models
	.then('app/controllers') // inclui o ditetório de controllers

	.into(app);
// o consign reconhece todos os arquivos da pasta routes (faz um scan), pega esses
// módulos e inclui dentro do servidor - app
module.exports = app; // o módulo vai retornar a variável app