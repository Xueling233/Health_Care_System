$(function () {
    var dom = document.getElementById("container1");
    //设置容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/4.0+'px';
        dom.style.height = window.innerHeight/2.1+'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title : {
            text: '正常心率范围：60-100',
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
                name: '体温',
                type: 'gauge',
                min: 30,
                max: 160,
                splitNumber: 13,
                center : ['50%', '55%'],
                radius: '70%',
                axisLine: { // 坐标轴线
                    show: true,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 20,
                        color: [
                            [0.23, '#e68b0f'],
                            [0.54, '#63869e'],
                            [1, '#c23531'],
                        ],
                    }
                },


                axisLabel: {
                    formatter:function(v){
                        switch ( v+ '') {
                            case '30': return '30';
                            case '60': return '60';
                            case '100': return '100';
                            case '160': return '160';
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
                    length: 25,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 30,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: ''
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

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
                    {value: 130.7, name: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n当前心率：异常\n\n\n\n'}]
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