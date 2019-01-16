var template = require('art-template')

var fs = require('fs')

// var tplStr = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <title>Title</title>
//         </head>
//         <body>
//             <p> 大家好，我叫： {{ name }} </p>
//             <p> 我今年 {{ age }} 岁了 </p>
//             <p> 我来自 {{ province }} </p>
//             <p> 我喜欢：{{ each hobbies }} {{ $value }} {{ /each }} </p>
//         </body>
//         </html>
// `

fs.readFile('./tpl.html', function (err, data) {
    if(err){
        return console.log("读取文件失败")
    }

    var ret = template.render(data.toString(), {
        title: '个人信息',
        name: 'Jam',
        age: 16,
        province: '北京',
        hobbies: [
            '吃饭',
            '睡觉',
            '打豆豆'
        ]
    })
    console.log(ret)
})



