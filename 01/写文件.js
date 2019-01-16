var writeTxt = require('fs')

writeTxt.writeFile('.././data/hello.md','hhh偶在写文件呀', function (error) {
    if(error){
       console.log("写文件失败！")
    }else{
        console.log("写文件成功！")
    }
})