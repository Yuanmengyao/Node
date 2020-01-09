const express = require('express');
const app = express();

app.use('/dataTime',function(req,res,next){
    console.log('进入中间件dataTime')
    next()
    console.log('离开中间件')
})

app.get('/dataTime',function(req,res){
    console.log('收到一个get请求，要做出响应')
    res.send({
        data:'今天星期四',
        time:'2020年1月9日11:13:59'
    })
})

let port = 5000;
app.listen(port,function(err){
    if(err){
        console.log('服务启动失败');
    }else{
        console.log(`服务启动成功 http://localhost:${port}`);
    }

})