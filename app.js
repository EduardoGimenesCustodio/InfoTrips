var app = require('./config/server');

// var rotaPaises = require('./app/routes/paises')(app);

// var rotaPais = require('./app/routes/pais')(app);

// var rotaHome = require('./app/routes/home')(app);

app.listen(3000,function(){
	console.log('Servidor ON');
});