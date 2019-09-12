$(function () {
    var dom = document.getElementById("tw");
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
            text: '近期体温变化详情',
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['体温值'],
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        /*设置x坐标值*/
    xAxis: {
     type: 'category',
     data: ['3.15', '3.17', '3.18', '3.19', '3.20', '3.21', '3.22', '3.24', '3.25', '3.26', '3.27', '3.28', '3.29', '3.30', '3.31', '4.1', '4.2', '',],
     axisLabel:{interval:0,rotate:40,
         fontSize:13,
         fontWeight:500
     },
     splitLine:{interval:0},
        boundaryGap:false
     },

        /*设置y坐标*/
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}°C',
                fontSize:13,
                fontWeight:500
            },
            axisPointer: {
                snap: true
            },
            min: '34',  //设置纵坐标最小值
        },
        visualMap: {
        show:false,
            top: 10,
            right: 10,
            pieces: [{
                gt: 34,
                lte: 36,
                color: '#e68b0f'
            }, {
                gt: 36,
                lte: 37.2,
                color: '#63869e'
            }, {
                gt: 37.2,
                lte: 40,
                color: '#c23531'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        grid:{right:'80'},
        series: [
            {
                itemStyle:{
                    normal:{
                        label:
                            {
                                show:true,
                                position:'bottom',
                                fontSize:13,
                                fontWeight:600
                            }
                    }
                },
                name: '体温值',
                type: 'line',
                smooth: true,
                data: [35.9, 36.3, 36.5, 37, 36.1, 37.5, 37, 37, 38, 38.5, 36.2, 36.1, 39, 37, 35.5, 40, 36.5, ,],
                markPoint: {       //标出异常点
                    data: [
                        //{type: 'max', name: '最大值'},
                        //{type: 'min', name: '最小值'}
                        {name: '', value: '异常', xAxis: '3.25', yAxis: 38},
                        {name: '', value: '异常', xAxis: '3.26', yAxis: 38.5},
                        {name: '', value: '异常', xAxis: '3.29', yAxis: 39},
                        {name: '', value: '异常', xAxis: '3.21', yAxis: 37.5},
                        {name: '', value: '异常', xAxis: '4.1', yAxis: 40},
                        {name: '', value: '异常', xAxis: '3.15', yAxis: 35.9},
                        {name: '', value: '异常', xAxis: '3.31', yAxis: 35.5},
                    ]
                },

                //设置固定标准线
                markLine: {
                    data: [
                        {
                            yAxis: 36,
                            label: {
                                formatter: "正常体温\n最低值:36",
                                fontSize:13,
                                fontWeight:400
                            },
                        },
                        {
                            yAxis: 37.2,
                            label: {
                                formatter: "正常体温\n最高值:37.2",
                                fontSize:13,
                                fontWeight:400
                            },
                        },
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