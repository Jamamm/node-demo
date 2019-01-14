var http = require('http')

var server = http.createServer()  //创建一个web服务器


//request请求事件处理函数，需要传入两个函数

server.on('request', function (request, response) {
    console.log("收到客户端的请求了,请求路径是："+ request.url)
    // response.write('hello')
    // response.write(' node.js')
    // response.end()

    // response.end("hello world!")

    var url = request.url
    if(url === '/' || url === '/index'){
        response.end("index")
    }else if(url === '/login'){
        response.end("login")
    }else{
        response.end('404 not found')
    }

})

server.listen(3000, function () {
    console.log('服务器启用成功，可以通过 http://127.0.0.1:3000/ 来访问')
})

