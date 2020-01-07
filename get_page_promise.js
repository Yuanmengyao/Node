const https = require('https');
const cheerio = require('cheerio');

function getPage(url) {
    return new Promise(function (resolve, reject) {
        const request = https.get(url, function (res) {
            let total = 0;
            let n = 0;
            let html = '';

            res.on('data', function (chunk) {
                n++;
                total += chunk.length;
                console.log('接收数据第' + n + '块:' + chunk);
                html += chunk.toString('utf8');
            })

            res.on('end', function () {
                console.log('接收完毕，共收到' + total + '字节');
                console.log('---------------------------');
                console.log(html);

                //请求成功收到结果
                resolve(html);

            })
        })

        //失败后
        request.on('error', function (err) {
            reject(err);
        })
    });
}
async function run() {
    try {
        let html = await getPage('https://www.sina.com.cn');
        //手动加载html文档
        const $ = cheerio.load(html);

        $('img').each(function(index,el){
            console.log(index);
            console.log($(el).attr('src'));
        })

        $('a').each(function(index,el){
            console.log($(el).attr('href'));
        })
    } catch (err) {
        console.log(err);
    }

}
run();