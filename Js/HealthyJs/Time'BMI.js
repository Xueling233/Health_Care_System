$( function(){
    var dom = document.getElementById("timeBMI");
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
            text: '正常BMI范围：18.5-23.9',
            x:'left',
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },


        series : [
            {
                name: 'BMI值',
                type: 'gauge',
                min: 10,
                max: 40,
                splitNumber:15,
                center : ['50%', '55%'],
                radius: '70%',
                axisLine: {
                    show:true,
                    lineStyle: {
                        color:[
                            [0.283,'#63869e'],
                            [0.463,'#336633'],
                            [0.567,'#99cc66'],
                            [0.733,'#Fa8c35'],
                            [1,'#c23531'],
                        ],
                    }
                },

                axisLabel: {
                    formatter:function(v){
                        switch ( v+ '') {
                            case '10': return '10';
                            case '18': return '18.5';
                            case '24': return '23.9';
                            case '28': return '27.9';
                            case '32': return '32';
                            case '40': return '40';
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
                            fontSize: 10
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
                axisTick: {
                    length: 35,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                splitLine: {
                    length: 40,
                    lineStyle: {
                        color: 'auto'
                    }
                },

                title : {
                    fontWeight: 'bolder',
                    fontSize:20,
                    fontStyle: ''
                },

                detail : {
                    fontWeight: 'bolder',
                    borderRadius: 3,
                    backgroundColor: '#444',
                    borderColor: '#aaa',
                    shadowBlur: 5,
                    shadowColor: '#333',
                    borderWidth: 2,
                    textBorderColor: '#000',
                    textBorderWidth: 3,
                    textShadowBlur: 3,
                    textShadowColor: '#fff',
                    fontFamily: 'Arial',
                    width: 50,
                    color: '#eee',
                    offsetCenter:[0,'55%'],
                    rich: {},
                    fontSize:'25'

                },
                data:[
                    {value: 25.2,name: '\n\n\n\n\n\n\n\n\n\n当前BMI:过重'}]
            },

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
});