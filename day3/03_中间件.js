const express = require('express')
const app = express();

//创建中间件
app.use('/userInfo',function(req,res,next){
    console.log('进入中间件');
    next();//进入下一步
    console.log('离开中间件');
})
app.use('/about',function(req,res,next){
    console.log('进入中间件2');
     next();//进入下一步
    console.log('离开中间件2');
})

app.get('/userInfo',function(req,res){
    console.log('get请求开始')
    res.send({
        name:'荒芜',
        age:99999
    })
    console.log('get请求结束')
})

app.get('/about',function(req,res){
    console.log('get请求开始2')
    res.send({
        name:'荒芜',
        age:99999
    })
    console.log('get请求结束2')
})

//监听端口号
let port = 3000;
app.listen(port,function(err){
    if(err){
        console.log('启动服务器失败',err)
        return;
    }
    console.log('http://localhost:3000')
})