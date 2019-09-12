danger();
function danger() {
    var dom = document.getElementById("danger");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.19+'px';
        dom.style.height = window.innerHeight/1.6+'px';
    };
//设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var labelOption = {
        normal: {
            show: true,
            formatter: '{c}  {a}',
            fontSize: 15    //内部字大小
        }
    };
    option = {
        title: {
            text: '危险隐患分析',
            left: 20,
            textStyle: {
                fontSize:28
            }
        },
        legend: {
            data: ['sos呼救', '燃气泄漏','跌倒检测','厨房漏水','卫生间漏水'],
            left:'center',
            textStyle: {fontSize:20}
        },
        grid: {
            left:'0',
            bottom: '0',
            right:'10px',
            containLabel: true
        },
        yAxis:  {
            type: 'value',
            show : false
        },
        xAxis: {
            type: 'category',

            data: ['5.1','5.2','5.3','5.4','5.5','5.6','5.7'],
            axisLabel: { //调整y轴的lable
                textStyle: {
                 fontSize: 18 // 让字体变大
                }
            }
        },
        series: [
            {
                name: 'sos呼救',
                type: 'bar',
                stack: '总量',
                label: labelOption,  //柱条是否有字
                //实现柱状图的圆弧效果
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 12
                    }
                },
                data:[
                    {value:10, name:'sos呼救',label:{formatter:"时间点 6:00"}},
                    {value:10, name:'sos呼救',label:{formatter:"时间点 6:00"}},
                    {value:10, name:'sos呼救',label:{formatter:"时间点 6:00"}}
                ]
            },
            {
                name: '燃气泄漏',
                type: 'bar',
                stack: '总量',
                barMinHeight:'70',
                label: labelOption,     //柱条是否有字
                //实现柱状图的圆弧效果
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 12
                    }
                },
                /* data: [120, 132, 101, 134, 90, 230, 210]*/
                data:[
                    {value:10, name:'燃气泄漏',label:{formatter:"燃气泄漏:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'燃气泄漏',label:{formatter:"燃气泄漏:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'燃气泄漏',label:{formatter:"燃气泄漏:3次\n时间点 6:00 7:40 8:00"}},
                    {value:10, name:'燃气泄漏',label:{formatter:"燃气泄漏:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'燃气泄漏',label:{formatter:"燃气泄漏:3次\n时间点 6:00 7:40 8:00"}},
                ]
            },
            {
                name: '跌倒检测',
                type: 'bar',
                stack: '总量',

                label: labelOption,     //柱条是否有字   //实现柱状图的圆弧效果
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 12
                    }
                },

                data:[
                    {value:10, name:'跌倒检测',label:{formatter:"时间点 6:00"}},
                    {value:10, name:'跌倒检测',label:{formatter:"时间点 6:00"}},
                    {value:10, name:'跌倒检测',label:{formatter:"时间点 6:00"}},
                    {value:10, name:'跌倒检测',label:{formatter:"时间点 6:00"}}
                ]
                /*data: [220, 182, 191, 234, 290, 330, 310]*/
            },
            {
                name: '厨房漏水',
                type: 'bar',
                stack: '总量',
                barMinHeight:'65',
                label: labelOption,     //柱条是否有字
                //实现柱状图的圆弧效果
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 12
                    }
                },
                data:[
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:3次\n时间点 6:00 7:40 8:00"}},
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'厨房漏水',label:{formatter:"厨房漏水:3次\n时间点 6:00 7:40 8:00"}}
                ]
                /*data: [150, 212, 201, 154, 190, 330, 410]*/
            },
            {
                name: '卫生间漏水',
                type: 'bar',
                stack: '总量',
                barWidth:'156',
                barMinHeight:'65',
                label: labelOption,     //柱条是否有字
                //实现柱状图的圆弧效果
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 12
                    }
                },
                data:[
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:3次\n时间点 6:00 7:40 8:00"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:2次\n时间点 6:00 7:40"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:3次\n时间点 6:00 7:40 8:00"}},
                    {value:10, name:'卫生间漏水',label:{formatter:"卫生间漏水:3次\n时间点 6:00 7:40 8:00"}}
                ]
                /*data: [820, 832, 901, 934, 1290, 1330, 1320]*/
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    window.onresize = function () {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
}