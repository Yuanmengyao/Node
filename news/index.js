const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

//将静态文件目录设置为：项目根目录+/public
const pathPublic = path.join(__dirname,'public');

//创建并使用中间件
app.use(express.static(pathPublic));

//定义一个get请求
/*app.get('/index',function(req,res){
    res.send({
        code:101,
        data:'ok',
        info:{
            name:'三三',
            age:12
        }
    })
})*/

axios.get('/userInfo').then(function(res){
    console.log(res.data)
})

//定义一个post请求
/*app.post('/about',function (req,res) {
    res.send({
        code:100,
        data:'关于'
    })
})*/

axios.post('/about').then(function(res){
    console.log(res.data)
})

app.listen(4000,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('服务器启动成功'+'http://localhost:4000')
    }
})