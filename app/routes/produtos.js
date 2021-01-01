module.exports = function(application) {

	application.get('/produtos', function (req, res) {

		var connection = application.config.db_connection()
		var gsModel = application.app.models.gsModel    // Acessando módulo 'gsModel'

		gsModel.getProdutos(connection, function(error, result) {
			res.render('produtos', {produtos : result})
		})
	})
}