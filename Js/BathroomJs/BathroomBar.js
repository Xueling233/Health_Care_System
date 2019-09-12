var dom = document.getElementById("container");
//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {
    dom.style.width = window.innerWidth/1.4+'px';
    dom.style.height = window.innerHeight/1.12+'px';
};
//设置容器高宽
resizeWorldMapContainer();
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        text: '卫生间活动',
        textStyle:{
            fontSize:30
        }
    },
    tooltip : {
        trigger: 'axis',
        formatter:'时间段:<br/>{b}-12:00'
    },
    legend: {
        data:['马桶','洗澡'],
        textStyle:{
            fontSize:20
        }
    },
//    toolbox: {
//        show : true,
//        feature : {
//            dataView : {show: true, readOnly: false},
//            magicType : {show: true, type: ['line', 'bar']},
//            restore : {show: true},
//            saveAsImage : {show: true}
//        }
//    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['01:10','03:50','07:15','09:00','13:27','15:39','17:02','19:00','19:03','21:13','23:45']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value} min'
            }
        }

    ],
    series : [
        {
            name:'马桶',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6,10.2, 10, 9,,6,4],
            markPoint : {
                symbolSize:'60',
                data : [
                    {type : 'min', name: '预警',
                        xAxis:'01:10',y:'84%',
                        label:{formatter:'小便\n预警'},
                    },
                ]
            },

            label:{
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'black'
                    },
                    formatter:'{c}min'
                }
            },
            markLine : {
                data : [

                    {label:{formatter:"平均时长：\n{c}min"},
                        type : 'average', name: '平均值',
                    }
                ]
            }
        },
        {
            name:'洗澡',
            type:'bar',
            data:[, , , , , , , ,63,, ],
            markPoint : {
                symbolSize:'60',
                data : [
                    {type : 'max', name: '异常',
                        xAxis:'21:03',y:'15%',
                        label:{formatter:'洗澡\n异常'},
                    },
                ]
            },
            label:{
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'black'
                    },
                    formatter:'{c}min'
                }
            },



        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
window.onresize = function () {
    //重置容器高宽
    resizeWorldMapContainer();
    myChart.resize();
};
