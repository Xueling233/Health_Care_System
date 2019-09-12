$(function() {
    var dom = document.getElementById("bloodsuger");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.775+'px';
        dom.style.height = window.innerHeight/3.0+'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '4.1-4.7血糖变化',
            textStyle:{
                fontSize:20
            },
            padding:20
            // subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高血糖', '最低血糖']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{interval:0,
                fontSize:13,
                fontWeight:500},
            data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} mmol',
                fontSize:13,fontWeight:500
            },


        },
        visualMap: {
            show:false,
            pieces: [{
                gt: 0,
                lte: 3.89999999999999,
                color: '#e68b0f'
            }, {
                gt: 3.9,
                lte: 6.1,
                color: '#63869e'
            }],
            outOfRange: {
                color: '#c23531'
            }
        },
        grid:{right:'130',bottom:'20'},
        series: [
            {
                //显示数值
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        fontSize:13,
                        fontWeight:600,
                    }
                },
                name: '最高血糖',
                type: 'line',
                smooth: true,
                //最高值和最低值决定纵坐标
                data: [5.6, 6.4, 5.2, 5.4, 6.4, 5.2, 6.7],

                markPoint: {
                    symbolSize:'40',
                    data: [
                        // {type: 'max', name: '最大值'},
                        //{type: 'min', name: '最小值'}
                        {name: '周最高', value: '异常', xAxis: 6, yAxis: 6.7},
                        {name: '', value: '异常', xAxis: 1, yAxis: 6.4},
                        {name: '', value: '异常', xAxis: 4, yAxis: 6.4},
                    ]
                },
                markLine: {
                    data: [
                        {

                            yAxis: '6.1',

                            label: {
                                fontSize:13,
                                fontWeight:400,
                                formatter: "空腹血糖最高标准值:\n6.1mmol"
                            }
                        }

                    ]
                }
            },

            {
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        fontSize:13,
                        fontWeight:600,
                    }
                },

                name: '最低血糖',
                type: 'line',
                smooth: true,
                data: [3, 4, 3.4, 3.6, 4.4, 3.5, 4.3],
                markPoint: {
                    symbolSize:'40',

                    data: [

                        {name: '', value: '异常', xAxis: 2, yAxis: 3.4},
                        {name: '', value: '异常', xAxis: 3, yAxis: 3.6},
                        {name: '周最低', value: '异常', xAxis: 0, yAxis: 3},
                        {name: '', value: '异常', xAxis: 5, yAxis: 3.5},
                    ]
                },
                markLine: {
                    data: [
                        {
                            yAxis: '3.9',
                            label: {
                                fontSize:13,
                                fontWeight:400,
                                formatter: '空腹血糖最低标准值:\n3.9mmol'
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
})