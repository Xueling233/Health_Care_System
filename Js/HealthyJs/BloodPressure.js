
$(function (){
    var dom = document.getElementById("bj");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.775+'px';
        dom.style.height = window.innerHeight/1.6+'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '4.1-4.6日血压变化',
            textStyle:{
                fontSize:20
            },
            padding:20
            //subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend:{
            data:['最高血压','最低血压'],
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            axisLabel:{interval:0,rotate:30,
                fontSize:13,
                fontWeight:500},
            data: ['4.1','4.2','4.3','4.4','4.5','4.6','4.7','']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} mmHg',fontSize:13,fontWeight:500
            },
            min:'40',
            splitNumber:6,

        },
        visualMap: [
            {show:false,
            seriesIndex:1,
            pieces: [{
                gt: 40,
                lte: 60,
                color: '#e68b0f'
            },
                {
                gt: 60,
                lte: 90,
                color: '#63869e'
            },
               ],
            outOfRange: {
                color: '#c23531'
            }},
            {show:false,
                seriesIndex:0,
                pieces: [{
                    gt: 0,
                    lte: 90,
                    color: '#e68b0f'
                },
                    {
                        gt: 90,
                        lte: 140,
                        color: '#63869e'
                    },
                ],
                outOfRange: {
                    color: '#c23531'
                }},

    ],
        grid:{right:'110',left:'80',bottom:'40'},
        series: [
            {smooth: true,
                label:{
                    normal:{
                        show:true,
                        fontSize:13,
                        fontWeight:600,
                        position:'bottom',

                    }
                },
                name:'最高血压',
                type:'line',
                data:[137, 119, 148, 123, 138, 120, 143],
                markPoint: {
                    data: [
                        {name: '', value:'异常', xAxis: 6, yAxis: 143},
                        {name: '', value: '异常', xAxis: 2, yAxis: 148},
                    ]
                },
                markLine: {
                    data: [
                        {
                            label:{fontSize:13,
                                fontWeight:400,formatter:'正常高压\n最小值:90mmHg\n正常低压\n最大值:90mmHg'},

                            yAxis: 90
                        },
                        {
                            label:{fontSize:13,
                                fontWeight:400,formatter:'正常高压\n最大值:140mmHg'},
                            yAxis: 140
                        },
                    ]

                }


            },

            {
                smooth: true,
                label:{
                    normal:{
                        show:true,
                        position:'bottom',
                        fontSize:13,
                        fontWeight:600,

                    }
                },
                name:'最低血压',
                type:'line',
                data:[64, 82, 73, 95, 64, 82, 78],
                markPoint: {
                    data: [
                        // {type: 'max', name: '最大值'},
                        // {type: 'min', name: '最小值'}
                        {name: '', value:'异常', xAxis: '4.4', yAxis: 95},

                    ]
                },
                markLine: {
                    data: [

                        {

                            label:{fontSize:13,
                                fontWeight:400,formatter:'正常低压\n最小值:60mmHg'},
                            yAxis: 60
                        },
                        //{type: 'average',  formatter: '最大值'},
                        // [{
                        //symbol: 'none',
                        // x: '90%',
                        //yAxis: 'max'
                        // }, {
                        //symbol: 'circle',
                        // label: {
                        //normal: {
                        //position: 'start',
                        // formatter: '最大值'
                        // }
                        // },
                        //type: 'max',
                        // name: '最高点'
                        // }]
                    ]
                }
            }
        ]

    };

    if (option && typeof option === "object") {
        window.onresize = function () {
            resizeWorldMapContainer();
            myChart.resize();
        };
        myChart.setOption(option, true);
    }

})