var express = require('express')
var consign = require('consign')  // Autoload de rotas
//var bodyParser = require('body-parser')

var app = express() // Executa função da váriavel express
app.use(express.static('./app/public/'))   // Incluir imagense outros arquivos locais
app.set('view engine', 'ejs') // ejs será o motor da aplicação
app.set('views', './app/views') // acessa do nivel do app.js

//app.use(bodyParser.urlencoded({extended: true}))

consign()
	.include('./app/routes')
/*	.then('config/db_connection.js') */
	.then('app/models')
	.into(app)  // include das rotas no consign

module.exports = app