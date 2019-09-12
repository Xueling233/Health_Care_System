Notification();
function Notification(){
    var dom = document.getElementById("Notificationechart");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.183+'px';
        dom.style.height = window.innerHeight/1.5+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '当日物品忘带详情',
            x: 'center',
            top:'5%'

        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['第一次持续时长', '第二次持续时长','第三次持续时长','第四次持续时长',''],
            x: 'left'

        },
        grid:{bottom:'6%'},

        xAxis:  {
            type: 'value',

        },
        yAxis: {
            type: 'category',
            data: ['钱包','拐杖','手机','眼镜','手环','钥匙']
        },
        itemStyle:{barBorderRadius: 10},
        series: [
            {
                name: '第一次持续时长',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}min\n8:00-8:15'

                    }
                },
                data: [1, 1, 1, 1, 1, 1]
            },
            {
                name: '第二次持续时长',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                        formatter:'{c}min\n12:00-12:10'

                    }
                },
                data: [1, 1, 1, 1, , 1]
            },
            {
                name: '第三次持续时长',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}min\n16:10-16:30'

                    }
                },
                data: [1, 1, , 1, , 1]
            },
            {
                name: '第四次持续时长',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}min\n18:00-18:20'
                    }
                },
                data: [1, 1, , , , 1]
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
                                formatter:'总时长:89min\n忘记次数:4次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'总时长:57min\n忘记次数:4次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'总时长:89min\n忘记次数:2次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'总时长:89min\n忘记次数:4次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'总时长:89min\n忘记次数:4次'
                            }
                        }
                    },
                    {value:1,
                        label:{
                            normal: {
                                show: true,
                                color:'black',
                                formatter:'总时长:89min\n忘记次数:4次'
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

}