var dom = document.getElementById("Small");
var resizeWorldMapContainer = function () {
    dom.style.width = window.innerWidth/7.8+'px';
    dom.style.height = window.innerHeight/3.4+'px';
};
//设置容器高宽
resizeWorldMapContainer();
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip : {
        formatter: "小便数据分析：<br/>预警"
    },
    series : [
        {
            type:'gauge',
            center : ['50%', '66%'],    // 默认全局居中
            radius : '100%',
            startAngle: 200,
            endAngle : -20,
            min: 0,                     // 最小值
            max: 100,                   // 最大值
            precision: 0,               // 小数精度，默认为0，无小数点
            splitNumber: 10,             // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color:[[0.3, 'RGB(47,69,84)'],[0.7,'#EE7600'],[1, 'RGB(194,53,49)']],
                    width: 20
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :4,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#eee',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    switch (v+''){
                        case '10': return '正常';
                        case '50': return '预警';
                        case '90': return '异常';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                    width: 2,
                    type: 'solid'
                }
            },
            pointer : {
                length : '80%',
                width : 8,
                color : 'auto'
            },
            title : {//设置沐浴的字体大小
                show : true,
                // offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333',
                    fontSize : 20
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['0%', '20%'],       // x, y，单位px
                formatter:'状态预警',//有颜色的字
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize : 0
                }
            },
            data: [{value: 50, name: '小便'}]
        }
    ]
};   ;
if (option && typeof option === "object") {
    window.onresize = function () {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
    myChart.setOption(option, true);
}