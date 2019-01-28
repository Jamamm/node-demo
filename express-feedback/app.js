var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.engine('art', require('express-art-template'))

app.use('/public/', express.static('./public/'))

//配置使用art-template
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



var comments = [{
    name: '张三1',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

app.get('/pinglun', function (req, res) {
    var comment = req.body
    comment.dataTime = '2019-01-01'
    comments.unshift(comment)
    res.redirect('/')
})

app.post('/post', function (req, res) {
    console.log("收到post请求了")
    console.log(req.body)
    var comment = req.body
    comment.dataTime = '2019-01-01'
    comments.unshift(comment)
    res.redirect('/')

})


app.listen(3000, function () {
    console.log('running...')
})
