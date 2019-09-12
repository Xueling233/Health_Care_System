sleep_quality ();
function sleep_quality(){
    var dom = document.getElementById("container2");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/3+'px';
        dom.style.height = window.innerHeight/2.8+'px';
    };
//设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip : {
            show: true,
            trigger: 'item',
            formatter: "{d}%"
        },
        legend: {
orient: 'vertical',
// top: 'middle',
            x: 'left', // 'center' | 'left' | {number},
            y: 'top', // 'center' | 'bottom' | {number}
            data: [ '深度睡眠','清醒状态','浅度睡眠'],
            textStyle:{
                fontSize:20
            }
        },
        series : [
            {
                name:'百分比',
                type:'pie',
                radius: '100%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:14,
                        fontWeight:400
                    }
                },
                data:[
                    {value:5.1, name:'深度睡眠',label:{formatter:"深度睡眠\n总时长:5.1h"}},
                    {value:0.5, name:'清醒状态',label:{formatter:"清醒状态\n总时长:30min"}},
                    {value:2.4, name:'浅度睡眠',label:{formatter:"浅度睡眠\n总时长:2.4h"}},
                ]
            },
            {
                name:'百分比',
                type: 'pie',
                radius : '55%',
                center: ['40%', '40%'],
                selectedMode: 'single',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
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