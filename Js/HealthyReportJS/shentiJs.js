
var dom = document.getElementById("xt1");
//设置容器宽和高
var  resizeWorldContainer =function () {
    dom.style.width=window.innerWidth/3.25+"px";
    dom.style.height=window.innerHeight/2.60+"px";
};
resizeWorldContainer();
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['身体数值']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10',
        top:'0',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            formatter: '{value}%',
        }
    },
    yAxis: {
        type: 'category',
        data: ['心率',
            '血压',
            '血糖',
            '吃饭',
            'BMI',
            '大便',
            '小便',
            '洗澡',

        ]
    },
    series: [{
        name: '身体数值达标率',
        type: 'bar',
        data: [20.00, 30.00, 50.00, 55.00, 65.00, 65.00, 75.00, 85.00]
    }]
};
if (option && typeof option === "object") {
    //重置容器宽高
    window.onresize=function () {
        resizeWorldContainer();
        myChart.resize();
    };
    myChart.setOption(option, true);
}