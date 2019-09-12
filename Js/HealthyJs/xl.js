$(function () {

    var dom = document.getElementById("xl");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.775+'px';
        dom.style.height = window.innerHeight/2.1+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '当日心率变化详情',
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['心率值'],
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,

            axisLabel:{interval:0,rotate:40,
                fontSize:13,
                fontWeight:500},
            data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00','24：00','']

        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}次/分',
                fontSize:13,fontWeight:500
            },
            min: '30',
            max: '150',   //设置最大坐标值
        },
        visualMap: {
            show:false,

            pieces: [{
                gt: 30,
                lte: 60,
                color: '#e68b0f'
            }, {
                gt: 60,
                lte: 100,
                color: '#63869e'
            }, {
                gt: 100,
                lte: 150,
                color: '#c23531'
            }],
            outOfRange: {
                color: '#999'
            }
        },
grid:{right:'100'},
        series: [
            {
                name: '心率值',
                type: 'line',
                smooth: true,
                data: [77, 40, 70, 75, 110, 88, 88, 105, 88],
                label:{
                    normal:{
                        show:true,
                        position:'bottom',
                        fontSize:13,
                        fontWeight:600,

                    },
                },
                markPoint: {
                    symbolSize:'60',
                    data: [
                        //{type: 'max', name: '最大值'},
                        //{type: 'min', name: '最小值'}
                        {name: '', value: '心率\n过速', xAxis: '21:00', yAxis: 105},
                        {name: '', value: '心率\n过速', xAxis: '12:00', yAxis: 110},
                        {name: '', value: '心率\n过缓', xAxis: '03:00', yAxis: 40},
                    ]
                },
                markLine: {
                    data: [
                        {
                            yAxis: 60,
                            label: {
                                formatter: "正常心率最低:\n60次/分",
                                fontSize:13,
                                fontWeight:400
                            },
                        },
                        {
                            yAxis: 100,
                            label: {
                                formatter: "正常心率最高:\n100次/分",
                                fontSize:13,
                                fontWeight:400
                            },
                        },
                        {
                            label: {formatter: "平均值:\n{c}次/分", fontSize:13,
                                fontWeight:400},
                            type: 'average', name: '平均值',

                        }
                    ]
                }
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
});