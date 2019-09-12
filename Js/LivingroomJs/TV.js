$(function() {
    var dom = document.getElementById("tv");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.4+'px';
        dom.style.height = window.innerHeight/2.1+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var weatherIcons = {
        'news': '../../Images/LivingroomImage/1.gif',
        'teelplay': '../../Images/LivingroomImage/2.gif',
        'entertainment': '../../Images/LivingroomImage/3.gif'
    };
    labelOption = {
        normal: {
            show: true,
        }
    }
    var seriesLabel = {
        normal: {
            show: true,
            textBorderColor: '#333',
            textBorderWidth: 2,


        }
    }

    option = {
        title: {
            text: '今日电视观看分析',
            //subtext:'今日电视观看情况'
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} h'
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: ['xw', 'xj', 'yl'],
            axisLabel: {
                formatter: function (value) {
                    return '{' + value + '| }\n{value|' + value + '}';
                },
                margin: 20,
                rich: {
                    value: {
                        lineHeight: 10,
                        align: 'center'
                    },
                    xw: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.news
                        },

                    },
                   xj: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.teelplay
                        }
                    },
                  yl: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.entertainment
                        }
                    }
                }
            }
        },
        grid:{bottom:'30',left:"80"},
        series: [
            {
                type: 'bar',
                data: ['-',
                    {
                        value:0.5,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'言情类：0.5h'
                            },
                    },
                    {
                        value:1,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'戏剧：1.0h',

                            },
                    },],
                label: seriesLabel,

            },
            {
                type: 'bar',
                label: seriesLabel,
                data: [{
                    value:0.5,
                    label:
                        {
                            // labelOption,
                            show:true,
                            fontSize:12,
                            formatter:'早间新闻：0.5h'
                        },
                },
                    {
                        value:1,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'古装类：1.0h'
                            },
                    },
                    {
                        value:0.6,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'真人秀：0.5h'
                            },
                    }]
            },
            {
                type: 'bar',
                label: seriesLabel,
                data: [{
                    value:0.5,
                    label:
                        {
                            // labelOption,
                            show:true,
                            fontSize:12,
                            formatter:'午间新闻：0.5h'
                        },
                },
                    {
                        value:2,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'战争类：2.0h'
                            },
                    },
                    {
                        value:0.5,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'闯关类：0.5h'
                            },
                    }]
            },
            {
                type: 'bar',
                label: seriesLabel,
                data: [{
                    value:0.5,
                    label:
                        {
                            /*labelOption,*/
                            show:true,
                            fontSize:12,
                            formatter:'晚间新闻：0.5h'
                        },
                },
                    {
                        value:0.4,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'其他：0.4h'
                            },
                    },
                    {
                        value:0.4,
                        label:
                            {
                                // labelOption,
                                show:true,
                                fontSize:12,
                                formatter:'其他：0.4h'
                            },
                    }]
            },
        ]
    };
    ;
    if (option && typeof option === "object") {
        window.onresize = function () {
            //重置容器高宽
            resizeWorldMapContainer();
            myChart.resize();
        };
        myChart.setOption(option, true);
    }
})