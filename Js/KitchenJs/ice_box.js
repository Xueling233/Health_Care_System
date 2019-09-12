$(document).ready(function ()/*网页加载好了就执行的函数*/ {
    var dom = document.getElementById("ice_box");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/3.0+'px';
        dom.style.height = window.innerHeight/2.4+'px';
    };
//设置容器高宽
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title:{
            text: '今日冰箱使用情况',
            color:'#333',
            padding:10,
            textStyle:{
                fontSize:20
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['异常次数','其他']
        },

        series: [
            {
                name:"今日冰箱使用情况",
                type:"pie",
                radious:[0,"55%"],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                data:[

                    {value:1, name:'异常', selected:true},
                    {value:3, name:'正常'}
                ]
            },

            {
                name:'今日冰箱使用情况',
                type:'pie',
                radius: [0, '55%'],         //外圈圈  （宽窄 值越小越宽，大小 值越大越小）
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[

                    {value:1, name:'异常', selected:true},
                    {value:3, name:'正常'}
                ]
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

});