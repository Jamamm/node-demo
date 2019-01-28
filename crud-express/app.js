var express = require('express')

var app = express()

app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

app.engine('html', require('express-art-template'))



app.get('/', function (req, res) {
    res.render("index.html",{
        students: [
            {"id": 1, "name": "张三", "gender": 1, "age": 12, "hobbies": "看书、睡觉、lol"},
            {"id": 2, "name": "李四", "gender": 1, "age": 27, "hobbies": "看书、睡觉、lol"},
            {"id": 3, "name": "王二", "gender": 1, "age": 19, "hobbies": "看书、睡觉、lol"},
            {"id": 4, "name": "莉莉", "gender": 0, "age": 24, "hobbies": "看书、睡觉、lol"},
            {"id": 5, "name": "洋洋", "gender": 0, "age": 18, "hobbies": "看书、睡觉、lol"},
            {"id": 6, "name": "花花", "gender": 0, "age": 16, "hobbies": "看书、睡觉、lol"}
        ]
    })
})

app.listen(5000, function () {
    console.log('running 5000')
})