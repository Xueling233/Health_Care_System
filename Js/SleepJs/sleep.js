sleep();
function sleep(){
    var dom = document.getElementById("container1");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/3.5+'px';
        dom.style.height = window.innerHeight/2.3+'px';
    };
//设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var data = [[20,21,7, '浅度睡眠'], [21, 21.2, 3, '清醒睡眠'], [21.2,22,12, '深度睡眠'], [22,24, 7, '浅度睡眠'], [24, 26, 12, '深度睡眠'], [26, 26.3, 3, '清醒睡眠'],[26.3,28, 7, '浅度睡眠'], [28,30,12, '深度睡眠']];
    var colorList = ['rgb(106,176,184)', 'rgb(47,69,84)', 'rgb(213,58,53)','rgb(106,176,184)',  'rgb(213,58,53)',  'rgb(47,69,84)','rgb(106,176,184)', 'rgb(213,58,53)'];
    data = echarts.util.map(data, function (item, index) {
        return {
            value: item,
            itemStyle: {
                normal: {
                    color: colorList[index]
                }
            }
        };
    });
    function renderItem(params, api) {
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();
        return {
            type: 'rect',
            shape: {
                x: start[0],
                y: start[1],
                width: size[0],
                height: size[1]
            },
            style: style
        };
    }
    option = {
        title: {
            text: '昨日睡眠情况',
            left: 'center',
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
        },
         grid:{left:'9%',right:'1%'},
        xAxis: {
            scale: true,
            splitNumber:10,
            axisLabel: {
                formatter: function (val) {
                    if(val>=24)
                        return (val-24)+ ':'+'00';
                    else
                    {
                        return val+':'+'00'
                    }
                },
                //横坐标的倾斜度为45
                rotate:45
            }
        },
        yAxis: {
        },
        series: [{
            type: 'custom',
            renderItem: renderItem,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

            dimensions: ['起始时间', '结束时间','时长'],
            encode: {
                x: [0, 1],
                y: 2,
                tooltip: [0,1,2],
                itemName: 3
            },
            data: data
        }]
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