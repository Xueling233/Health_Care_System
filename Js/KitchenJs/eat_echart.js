$(document).ready(function ()/*网页加载好了就执行的函数*/ {

    var dom = document.getElementById("eat");
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
    app.title = '环形图';
    option = {
        title: {
            text:'今日用餐情况',
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
            x: 'center',
            data:['早餐','午餐','晚餐'],
            padding:12,
            textStyle:{
                fontSize:20
            }
        },

        series: [
            {  hoverOffset:0,
                name:'访问来源',
                type:'pie',

                radius: ['52%', '75%'],
                label: {
                    normal: {
                        show: true,
                        fontSize:15
                    },

                },
                data:[
                    {value:5, name:'早餐',label:{
                        normal:{
                            show:true,
                            formatter:'{b}:6:00-6:15'}

                    }},
                    {value:12, name:'午餐',label:{
                        normal:{
                            show:true,
                            formatter:'{b}:11:10-11:30'}

                    }},
                    {value:10, name:'晚餐',label:{
                        normal:{
                            show:true,
                            formatter:'{b}:\n18:06-18:40'}

                    }}

                ]
            },
            {hoverOffset:0,
                name:'访问来源',
                type:'pie',

                radius: ['52%', '75%'],
                label: {
                    normal: {
                        show: true,
                        position:'inner',
                        fontSize:15
                    },

                },
                data:[
                    {value:15, name:'早餐',label:{
                        normal:{
                            show:true,
                            formatter:'{c}min'}

                    }},
                    {value:20, name:'午餐',label:{
                        normal:{
                            show:true,
                            formatter:'{c}min'}

                    }},
                    {value:34, name:'晚餐',label:{
                        normal:{
                            show:true,
                            formatter:'{c}min'}

                    }}

                ]
            },
            {hoverOffset:0,
                name:'访问来源1',
                type:'pie',

                radius: ['52%', '75%'],
                label: {
                    normal: {
                        show: true,
                        position:'center',
                        fontSize:15,
                    }
                },

                data:[{name:'',label:{
                    normal:{
                        show:true,
                        formatter:'当日异常\n晚餐',
                        color:'#c23531'
                    }

                }}]
            },

        ]
    };


    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };

    window.onresize = function () {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
});