$(function(){
    var dom = document.getElementById("br2");
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
        title: {
            text: '正常高压范围:90-140',
            textStyle:{
                fontSize:20
            },
            padding:20

            //subtext: '纯属虚构'
        },
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },

        series : [
            {
                name: '血压',
                type: 'gauge',
                min: 60,
                max: 200,
                splitNumber: 14,
                radius: '77%',
                center : ['50%', '60%'],

                axisLine: { // 坐标轴线
                    //show:true,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10,
                        color:[
                            [0.22,'#e68b0f'],
                            [0.575,'#63869e'],
                            [1,'#c23531'],
                        ],
                    }
                },
                axisLabel: {
                    formatter:function(v){
                        switch ( v+ '') {
                            case '60': return '60';
                            case '90': return '90';
                            case '140': return '140';
                            case '200': return '200';
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

                title : {
                    //其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: ''
                },
                detail : {

                    //设置显示框的样式
                    fontWeight: 'bolder',
                    borderRadius: 3,
                    backgroundColor: '#444',
                    borderColor: '#aaa',
                    shadowBlur: 5,
                    shadowColor: '#333',
                    //shadowOffsetX: 0,
                    //shadowOffsetY: 3,
                    borderWidth: 2,
                    textBorderColor: '#000',
                    textBorderWidth: 3,
                    textShadowBlur: 3,
                    textShadowColor: '#fff',
                    // textShadowOffsetX: 0,
                    //textShadowOffsetY: 0,
                    fontFamily: 'Arial',
                    width: 40,
                    color: '#eee',
                    fontSize:'20',
                    offsetCenter:['-5%','55%'],
                    rich: {}
                },
                data:[
                    {value: 145, name: '\n\n\n\n\n\n\n\n当前高压:偏高'}]
            },

        ]
    };

    if (option && typeof option === "object") {
        window.onresize = function () {
            resizeWorldMapContainer();
            myChart.resize();
        };
        myChart.setOption(option, true);
    }
});