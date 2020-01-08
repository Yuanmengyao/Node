async function run(){
    let result = await startStudy();
    console.log(result)
    let res = await startWork();
    console.log(res)
}
run();

function startStudy(){
    return new Promise(function(resolve,reject){
        console.log('好好学习');
        setTimeout (function(){
            resolve('将来找到好工作')
        },5000) 
    })
}

function startWork(){
    return new Promise(function(resolve,reject){
        console.log('努力工作')
        setTimeout(function(){
            resolve('走上人生巅峰')
        },3000) 
    })
}