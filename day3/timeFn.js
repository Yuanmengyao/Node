 // 日期差值函数的封装
 function diffDate(date1,date2){
    /******第一个日期的处理******/
     // 1 将时间字符串转化为数组
     var firstDateTime = date1.split(" ");
     // 年月日的设置
     var firstDate = firstDateTime[0].split('/');
     // 实例化日期对象
     var firstDateObj = new Date();
     // 年份设置
     firstDateObj.setFullYear(firstDate[0]);
     // 月份设置
     firstDateObj.setMonth(firstDate[1]);
     // 日期设置
     firstDateObj.setDate(firstDate[2]);

     // 时分秒的设置
     var firstTime = firstDateTime[1].split(":");
     // 小时的设置
     firstDateObj.setHours(firstTime[0]);
     // 分钟的设置
     firstDateObj.setMinutes(firstTime[1]);
     // 秒的设置
     firstDateObj.setSeconds(firstTime[2]);
     
     /*********第二个日期的设置************/
       // 1 将时间字符串转化为数组
       var secondDateTime = date2.split(" ");
     // 年月日的设置
     var secondDate = secondDateTime[0].split('/');
     // 实例化日期对象
     var secondDateObj = new Date();
     // 年份设置
     secondDateObj.setFullYear(secondDate[0]);
     // 月份设置
     secondDateObj.setMonth(secondDate[1]);
     // 日期设置
     secondDateObj.setDate(secondDate[2]);

     // 时分秒的设置
     var secondTime = secondDateTime[1].split(":");
     // 小时的设置
     secondDateObj.setHours(secondTime[0]);
     // 分钟的设置
     secondDateObj.setMinutes(secondTime[1]);
     // 秒的设置
     secondDateObj.setSeconds(secondTime[2]);
     console.log(secondDateObj);

     // 计算两个日差值
     var diffMs = Math.abs(firstDateObj-secondDateObj);
    //  console.log(diffMs)
    // 计算天数
      var day = parseInt(diffMs/1000/60/60/24);
      // 计算小时
      var hours = parseInt((diffMs/1000/60/60)%24);
      // 计算分钟
      var min  = parseInt((diffMs/1000/60)%60);

      let timeDiff = '';
        timeDiff = ('还有'+day+'天'+hours+'小时'+min+'分钟就放假啦');
        return timeDiff
 }
 
 // 2018-8-8
 //diffDate('2018/8/8 13:22:34','2002/10/8 9:20:32')
