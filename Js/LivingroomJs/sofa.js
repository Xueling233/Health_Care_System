$(function() {
    var dom = document.getElementById("sofa");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.4+'px';
        dom.style.height = window.innerHeight/2.8+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '今日沙发使用分析',
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['压力值'],
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
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        },
        yAxis: {
            name:'压力值',
            type: 'value',
            max:300,
            date:['50','100','150','200','250','300']
        },
        series: [
            {
                name:'压力值',
                type:'line',
                step: 'start',
                data:[10, 10, 10,10,10, 10,10,100,10,100,10,10,10,103,10,100,190,10,10,10,105,105,10,10,10]
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