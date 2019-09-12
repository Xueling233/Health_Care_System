$(document).ready(function ()/*网页加载好了就执行的函数*/ {

    var dom = document.getElementById("boil_water_2");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.008+'px';
        dom.style.height = window.innerHeight/2.4+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['第一次异常', '第二次异常','第三次异常','第四次异常',''],
            padding:10,
            textStyle:{
                fontSize:20
            }
        },
        grid:{top:'10%',bottom:20},

        xAxis:  {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: ['4.1日','4.2日','4.3日','4.4日','4.5日','4.6日','4.7日']
        },
        itemStyle:{barBorderRadius: 10},
        series: [
            {
                name: '第一次异常',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'8:10'
                    }
                },
                data: [1, 1,,, , ]
            },
            {
                name: '第二次异常',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                        formatter:'12:20'

                    }
                },
                data: [,1, , , , ]
            },
            {
                name: '第三次异常',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}min\n16:10-16:30'

                    }
                },
                data: [, , , , , ]
            },
            {
                name: '第四次异常',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}min\n18:00-18:20'
                    }
                },
                data: [, , , , , ]
            },
            {
                name: '',
                type: 'bar',
                stack: '总量',
                itemStyle:{barBorderRadius: 40,color:'#E0E0E0'},
                data: [
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:1次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:2次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:0次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:0次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:0次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:0次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'异常次数:0次'
                            }
                        }
                    },
                ]
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