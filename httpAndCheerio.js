const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.sina.com.cn',function(res,req){
    let total = 0;
    let n = 0;
    let html = '';
    res.on('data',function(chunk){
        n++;
        total += chunk.length;
        console.log('接收数据第'+ n +'块:'+chunk);
        html += chunk.toString('utf8');
    })

    res.on('end',function(){
        console.log('接收完毕，共收到'+total+'字节');
        console.log('-------------   触及灵魂的分割线  --------------');
        console.log(html);

        // const $ = cheerio.load(html);

        // $('img').each(function(index,el){
        //     console.log(index);
        //     console.log($(el).attr('src'));
        // })

        // $('a').each(function(index,el){
        //     console.log($(el).attr('href'));
        // })

    })
})