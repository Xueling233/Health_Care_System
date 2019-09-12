$(function () {
    var dom = document.getElementById("xt2");
    //设置容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/4.0+'px';
        dom.style.height = window.innerHeight/3.2+'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title : {
            text: '正常餐后1小时血糖:6.7-9.4',
            //subtext: '实时数据',
            x:'left',
            textStyle:{
                fontSize:20
            },
            padding:20

        },
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },

        series: [
            {
                name: '血糖',
                type: 'gauge',
                min: 0,
                max: 15,
                splitNumber: 20,
                center : ['50%', '60%'],
                radius: '77%',
                axisLine: { // 坐标轴线
                    show: true,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10,
                        color: [
                            [0.45, '#e68b0f'],
                            [0.65, '#63869e'],
                            [1, '#c23531'],
                        ],
                    }
                },
                axisLabel: {
                    formatter:function(v){
                        switch ( v+ '') {
                            case '0': return '0';
                            case '6.75': return '6.7';
                            case '9.75': return '9.4';
                            case '15': return '15';
                            default: return '';
                        }
                    },

                        fontSize: 15,
                         fontWeight:500

                },

                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                        fontSize: 17,

                },
                detail: {

                    //设置显示框的样式
                    fontWeight: 'bolder',
                    borderRadius: 3,
                    backgroundColor: '#444',
                    borderColor: '#aaa',
                    shadowBlur: 5,
                    shadowColor: '#333',
                    shadowOffsetX: 0,
                    shadowOffsetY: 3,
                    borderWidth: 2,
                    textBorderColor: '#000',
                    textBorderWidth: 2,
                    textShadowBlur: 2,
                    textShadowColor: '#fff',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                    fontFamily: 'Arial',
                    width: 55,
                    color: '#eee',
                    offsetCenter:[0,'55%'],
                    rich: {},
                    fontSize:'23'
                },
                data: [
                    {value: 9.2, name: '\n\n\n\n\n\n\n\n今日餐后1小时血糖：\n正常'}]
            },

        ]
    };


    if (option && typeof option === "object") {
        //重置容器高宽
        window.onresize = function () {
            resizeWorldMapContainer();
            myChart.resize();
        };
        myChart.setOption(option, true);
    }
});