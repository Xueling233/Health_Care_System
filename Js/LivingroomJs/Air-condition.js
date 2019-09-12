$(function() {
var dom = document.getElementById("aircondition");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.4+'px';
        dom.style.height = window.innerHeight/2.1+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
        title: {
            text: '今日空调使用情况',
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:[''],
            textStyle:{
                fontSize:20
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            /*name:'时间',
             nameLocation:'start',

             nameGap:20,*/
            boundaryGap: false,

            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        },
        yAxis: {
            name:'开关空调',
            type: 'value',
            axisLabel: {
                formatter: '{value}°C'
            },
            max:40,
            date:['10','15','20','25','30','35']
        },
        series: [
            {

                name:'温度',
                type:'line',
                step: 'start',
                data:[0,0,0,0,0,0,0,0,0,0,0,0,0,25,27,0,0,0,0,0,25,26,28,0,0]
            }
        ]
    };

if (option && typeof option === "object") {
    window.onresize = function () {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
    myChart.setOption(option, true);
}
})