function rand(resolve,reject){
    let num = Math.random()*2;
    if(num<1){
        setTimeout(function(){
           console.log('这个随机数小于1'); 
           resolve('这个随机数是:'+num);
        },3000)
    }else{
        console.log('这个随机数大于1');
        reject('这个随机数是:'+num);
    }
}

new Promise(rand).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});
