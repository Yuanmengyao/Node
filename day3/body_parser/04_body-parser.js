const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

//使用静态资源中间件 加载前端网页
app.use(express.static(path.join(__dirname,'public')));
//使用json中间件 解析器
app.use(bodyParser.json());
//使用cookie中间件 解析器
app.use(cookieParser());

app.get('/userInfo',function(req,res){
    res.send({
        name:'章',
        age:23
    })
})

app.post('/login',function(req,res){
    console.log(req.body);
    const {username,password} = req.body;

    if(username === '章若楠' && password === '123' ){
        //设置cookie
        let token = 'qwerty';
        res.cookie('token',token)
        res.send({
            code:100,
            msg:'登录成功'
        })
    }else{
        res.send({
            code:101,
            msg:'登录失败'
        })
    }
})



let port = 3000;
app.listen(port,function(err){
    if(err){
        console.log('服务器启动失败'+err);
    }
    console.log('http://localhost:3000')
})