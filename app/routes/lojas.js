module.exports = function(app) {
    app.get('/lojas', function (req, res) {
        res.render('lojas')
    })
}