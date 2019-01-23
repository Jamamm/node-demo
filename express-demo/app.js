var express = require('express')

var app = express()

app.use('/public', express.static('./static'))

app.get('/', function (req,res) {
    res.send("hello express")
})

app.get('/about', function (req,res) {
    res.send("hello express about")
})

app.listen(3000, function () {
    console.log("app is running at port 3000")
})