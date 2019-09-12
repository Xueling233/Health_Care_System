$(function () {
    var dom = document.getElementById("eat_warning");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
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
        title: {
            text: '5.1-5.7饮食分析',
            padding:10,
            textStyle:{
                fontSize:20
            }
        },
        legend: {
            data:['早饭','午饭','晚饭'],
            padding:12,
            textStyle:{
                fontSize:20
            }
        },
        toolbox: {
            show: true,
            feature: {

                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            axisLabel:{interval:0,
                fontSize:13,
                fontWeight:500},
            data: ['5.1','5.2','5.3','5.4','5.5','5.6','5.7']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}min',
                fontSize:13,fontWeight:500
            },
            axisPointer: {
                snap: true
            },
        },
        grid:{bottom:'25',right:'90'},
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
                name:'早饭',
                type:'line',
                smooth: true,
                data:[6.4, 6.2, 6.5, 6.7, 6.2, 5.9, 6.5],
                markPoint: {
                    data: [
                        {name: '过长', value: '过长', xAxis: 1, yAxis: 6.2},
                        {name: '过短', value: '过短', xAxis: 3, yAxis: 6.6}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值',label: {
                            formatter: "早餐平均时长:\n{c}min",
                            fontSize:13,
                            fontWeight:400
                        }}

                    ]
                }
            },
            { itemStyle:{
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
                name:'午饭',
                type:'line',
                smooth: true,
                data:[11.5, 11.3, 12.1, 12, 11.7, 11.5, 11.4],
                markPoint: {
                    data: [
                        {name: '过长', value: '过长', xAxis: 2, yAxis: 12.1},
                        {name: '过长', value: '过长', xAxis: 4, yAxis: 11.7},
                        {name: '过长', value: '过长', xAxis: 5, yAxis: 11.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值',label: {
                            formatter: "早餐平均时长:\n{c}min",
                            fontSize:13,
                            fontWeight:400
                        }}
                    ]
                }
            },
            { itemStyle:{
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
                name:'晚饭',
                type:'line',
                smooth: true,
                data:[17.6, 17.3, 17.4, 17.9, 17.1, 18.3, 17],
                markPoint: {
                    data: [
                        {name: '过长', value: '过长', xAxis: 0, yAxis: 17.7}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值',label: {
                            formatter: "早餐平均时长:\n{c}min",
                            fontSize:13,
                            fontWeight:400
                        }}
                    ]
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };

    window.onresize = function () {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
});

