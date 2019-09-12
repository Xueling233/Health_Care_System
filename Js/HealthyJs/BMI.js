$( function(){
    var dom = document.getElementById("BMIcontainer");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.775+'px';
        dom.style.height = window.innerHeight/2.1+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '4月BMI数据趋势图',
            textStyle:{
                fontSize:20
            },
            padding:20

        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['BMI值'],
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        xAxis:  {
            type: 'category',
            data: ['4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','4.10','4.11','4.12',
                '4.13','4.14','4.15','4.16','4.17','4.18','4.19','4.20','4.21','4.22','4.23','4.24',
                '4.26','4.27','4.28','4.29','4.30'],
            boundaryGap: false,
            axisLabel:{interval:0,rotate:30,
                fontSize:13,
                fontWeight:500},

        },
        yAxis: {
            type: 'value',
            min:'16',
            max:'26',
            axisLabel: {
             fontSize:13,fontWeight:500
            },

        },
        visualMap: {
            show:false,
            top: 10,
            right: 10,
            pieces: [{
                gt: 18.5,
                lte: 23.9,
                color: '#63869e'
            }],
            outOfRange: {
                color: '#c23531'
            }
        },
        grid:{right:'85',left:'30'},
        series: [
            {  smooth:true,
                name:'BMI值',
                type:'line',
                data:[21.6,25,22.2,22.3,22,23,23.6,22.5,22.5,22.6,22.4,22.4,22.5,22.1,22.6
                    ,22.5,22.4,22.6,22.5,23.5,22.9,22.8,22.5,22.1,21.6,21.5,21.3,21.1,21.1,21.1],
                itemStyle:{
                    normal:{
                        label:
                            {
                                show:false,
                                position:'bottom',
                                fontSize:13,
                                fontWeight:600
                            }
                    }
                },
                markPoint: {
                    symbol:'pin',
                    data: [
                        {name: '最值', value: '异常\n25', xAxis: '4.2', yAxis:25},
                    ]
                },
                markLine: {
                    data: [
                        {
                            label:{ fontSize:13,
                                fontWeight:400,formatter:'正常BMI\n最大值:23.9'},
                            yAxis:23.9
                        },
                        {
                            label:{ fontSize:13,
                                fontWeight:400,formatter:'正常BMI\n最小值:18.5'},
                            yAxis:18.5
                        },
                        {type: 'average', name: '平均值',
                            lineStyle:{
                                color:'#63869e'
                            },
                            label:{formatter:'本月BMI\n平均值:{c}', fontSize:13,
                                fontWeight:400}
                        },

                    ]
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});