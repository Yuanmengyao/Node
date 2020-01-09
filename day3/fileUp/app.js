const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

//中间件
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

app.get('index',function(req,res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/file_upload',function(req,res){
    //上传的文件信息
    console.log(req.files[0])
    let desFile = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(desFile,data,function(err){
            if(err){
                console.log('写入文件失败' + err);
            }else{
                response = {
                    msg:'fileUploadSuccess',
                    fileName:req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
})

//定义&监听端口
let port = 4000;
app.listen(port,function(err){
    if(err){
        console.log('服务器出错啦' + err);
    }else{
        console.log(`服务器启动成功，地址：http://localhost:${port}`);
    }
})
