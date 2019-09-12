breath();
function breath(){
    var dom = document.getElementById("container3");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2+'px';
        dom.style.height = window.innerHeight/2.3+'px';
    };
//设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '昨日呼吸速率变化情况',
            left: '10',
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['呼吸速率值'],
            textStyle:{
                fontSize:20
            }
        },
        grid:{left:'11%'},
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
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24：00'],
            axisLabel: {
                //横坐标的倾斜度为45
                fontSize:13,fontWeight:500,rotate:45
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 次/分',
                fontSize:13,fontWeight:500
            },
            min:'30',
            max:'150'   //设置最大坐标值
        },
        visualMap: [
            {show:false,
                seriesIndex:1,
                pieces: [{
                    gt: 40,
                    lte: 60,
                    color: '#e68b0f'
                },
                    {
                        gt: 60,
                        lte: 90,
                        color: '#63869e'
                    },
                ],
                outOfRange: {
                    color: '#c23531'
                }},
            {show:false,
                seriesIndex:0,
                pieces: [{
                    gt: 0,
                    lte: 60,
                    color: '#e68b0f'
                },
                    {
                        gt: 60,
                        lte: 100,
                        color: '#63869e'
                    },
                ],
                outOfRange: {
                    color: '#c23531'
                }},

        ],
        grid:{right:'80',left:'90',bottom:'50'},
        series: [
            {smooth: true,
                name:'呼吸速率值',
                type:'line',
                data:[77, 40, 70, 75, 110, 88,88,100,88],
                markLine: {
                    data: [
                        {label:{fontSize:14,
                            fontWeight:400,formatter:"平均值:\n{c}"
                            },
                            type : 'average', name: '平均值'
                        }
                    ]
                }
            },
            {
                name:'',
                type:'line',

                markPoint: {
                    symbolSize:'60',
                    data: [
                        {name: '', value: '呼吸速率\n过速', xAxis: '21:00', yAxis: 100},
                        {name: '', value: '呼吸速率\n过速', xAxis: '12:00', yAxis: 110},
                        {name: '', value: '呼吸速率\n过缓', xAxis: '03:00', yAxis: 40}
                    ],
                },


                markLine:{
                    data:[
                        {
                            yAxis:60,
                            label:{fontSize:14,
                                fontWeight:400,
                                formatter:"最低值:60"

                            }
                        },
                        {
                            yAxis:100,
                            label:{
                                fontSize:14,
                                fontWeight:400,
                                formatter:"最高值:100"

                            }
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

}