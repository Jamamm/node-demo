var express = require('express')

var app = express()

app.use('/node_modules', express.static('./node'))

app.engine('html', require('express-art-template'))



app.get('/', function (req, res) {
    res.render("index.html")
})

app.listen(5000, function () {
    console.log('running 5000')
})