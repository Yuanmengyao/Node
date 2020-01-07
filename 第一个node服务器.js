const http = require('http');
let n=0;
const server = http.createServer((req,res) => {
    n++;
    console.log('第'+n+'次客户端请求来了',new Date())
    console.log(req.url)
    if(req.url === '/index.html'){
        res.write(`
        <html>
        <meta charset="UTF-8">
            <body>
            <div style="background:red;width:500px;height:500px">首页</div>
            </body>
        </html>
        `)
    }else if(req.url === '/about.html'){
        res.write(`
        <html>
        <meta charset="UTF-8">
            <body>
            <p style="display:block;background:blue;width:300px;height:300px">关于</p>
            </body>
        </html>
    `)
    }else{
        
    }
    res.write('hello world')
    res.end();
}).listen(3000,(err) => {
    if(err){
        console.log(err);
    }else{
        console.log('服务器启动成功 http://localhost:3000')
    }
});