module.exports = function(app) {
    app.get('/cadastro', function (req, res) {
		res.render('cadastro')
})

    var multer = require('multer')

    var storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, 'app/public/images')
        },
        filename: function (req, file, callback) {
            callback(null, Date.now() + file.originalname)
        }
    })

    var upload = multer({storage: storage})
    
    app.post('/cadastrar', upload.single("file"), function (req, res) {

      var categoria = req.body.categoria
      var descricao = req.body.descricao
      var preco = req.body.preco
      var preco_venda = req.body.preco_venda
      var imagem = 'images/' + req.file.filename
      imagem = imagem.toString()

      var connection = app.config.db_connection()

      var gsModel = app.app.models.gsModel
        
      gsModel.salvarProduto(categoria, descricao, preco, preco_venda, imagem, connection, function(error, result) {
        res.redirect('/produtos')
		  })  
    })
}