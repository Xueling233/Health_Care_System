
getNowFormatDate();
changeSrc();
//获取当天日期、时间和天气，并添加到html页面上
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = ".";
    var seperator2 = ".";
    var seperator3 = ".";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator2 + strDate;
    x=document.getElementById("ShowDate");  // 找到元素
    x.innerHTML=currentdate+"&nbsp;&nbsp;";    // 改变内容
//end
    //定时器每秒调用一次fnDate()
    setInterval(function(){
        fnDate();
    },1000);
    $("#WebWeather").append('<iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=5&color=%23FFFFFF&site=15" width="180" height="20" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>');
}

//js 获取当前时间
function fnDate(){
    var oDiv=document.getElementById("ShowTime");
    var date=new Date();
    var hours=date.getHours();//小时
    var minute=date.getMinutes();//分
    var second=date.getSeconds();//秒
    var time=fnW(hours)+":"+fnW(minute)+":"+fnW(second);
     oDiv.innerHTML=time+"&nbsp;&nbsp;";
}
//补位 当某个字段不是两位数时补0
function fnW(str){
    var num;
    str>10?num=str:num="0"+str;
    return num;
}



function changeSrc()
{
    document.getElementById("userimg").src="../../Images/MainImage/grandfather.jpg";
}




//-------------------------------------------------------------

