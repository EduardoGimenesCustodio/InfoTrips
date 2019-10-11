module.exports = function(app){
	app.get('/cadastro', function(req,res){
		app.app.controllers.cadastro.cadastro(app, req, res);
	});

	var multer = require('multer');

	var path = require('path');

	var nome_foto_usuario;

	var storage = multer.diskStorage({
		destination: function (req, foto_usuario, cb) {
			cb(null, 'uploads/')
		},
		filename: function (req, foto_usuario, cb) {
			cb(null, foto_usuario.originalname);
			nome_foto_usuario = foto_usuario.originalname;
		}
	});
	
	// utiliza a storage para configurar a instância do multer
	var upload = multer({ storage });

	app.post('/cadastrar/usuario', upload.single('foto_usuario'), function(req,res){
		app.app.controllers.cadastro.cadastrar_usuario(app, req, res, nome_foto_usuario);
	});
}