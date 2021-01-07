module.exports = function() {

	this.getProdutos = function (connection, callback) {
		connection.query('SELECT * FROM produtos', callback)
	}

	this.salvarProduto = function (categoria, descricao, preco, preco_venda, imagem, connection, callback) {
		connection.query(
			'INSERT INTO produtos (categoria, descricao, preco, preco_venda, imagem) VALUES (?, ?, ?, ?, ?)', [categoria, descricao, preco, preco_venda, imagem], callback)
	}

	return this
}