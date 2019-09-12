/**
 * Created by x on 2018/4/23.
 */
Notification1();
function Notification1(){
    var dom = document.getElementById("Notification1");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/2.5+'px';
        dom.style.height = window.innerHeight/1.5+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var timeData = ['4.1','4.2','4.3','4.4','4.5','4.6','4.7'];
    option = {
        title: {
            text: '4.1-4.7物品忘带分析',
            x: 'center',
            top:'5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data:['忘记次数','忘记物品数'],
            x: 'left'
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        axisPointer: {
            link: {xAxisIndex: 'all'}
        },

        grid: [{

             height: '35%'
        }, {

            top: '55%',
            height: '35%'
        }],
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData
            },
            {
                gridIndex: 1,
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData,
                position: 'top'
            }
        ],
        yAxis : [
            {
                name : '忘记次数',
                type : 'value',
                splitNumber:'4'

            },
            {
                gridIndex: 1,
                name : '忘记物品数',
                type : 'value',
                inverse: true
            }
        ],
        series : [
            {
                name:'忘记次数',
                type:'line',
                smooth: true,
                symbolSize:8,
                hoverAnimation: false,
                data:[1,2,3,0,1,0,0]
            },
            {
                name:'忘记物品数',
                type:'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                smooth: true,
                hoverAnimation: false,
                data: [1,3,4,0,3,0,0 ]
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


