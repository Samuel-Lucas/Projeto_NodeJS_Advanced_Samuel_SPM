var app = require('./config/server') // importando módulo

app.listen(3000, function(req, res) {
	console.log('Server On !')
})