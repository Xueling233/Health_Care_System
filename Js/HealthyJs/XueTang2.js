$(function() {
    var dom = document.getElementById("bloodsugerpie");
    var resizeWorldMapContainer = function () {
        dom.style.width = window.innerWidth/1.775+'px';
        dom.style.height = window.innerHeight/1.6+'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '4.1-4.7血糖变化情况',
            //subtext: '纯属虚构',
            left: '150px',
            textStyle:{
                fontSize:20
            },
            padding:20
        },
        //提示框组件
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        //图例组件
        legend: {
            //图列组建为纵向布局
            orient: 'vertical',

            //图例组件离容器左侧的距离
            top: '90px',
            //right:'20px',
            left: '340px',

            textStyle: {
                fontSize: 25
            },
            data: ['偏低3次', '正常7次', '偏高4次']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',

                //饼图的半径
                radius: '55%',

                //饼图的中心（圆心）坐标
                center: ['40%', '50%'],
                //标签的位置
                label: {

                    position: 'inner'

                },


                data: [
                    //formatter标签内容格式器，支持字符串模板和回调函数两种形式
                    //字符串模板 模板变量有：
                    //{a}：系列名
                    //{b}：数据名
                    //{c}：数据值
                    //{d}：百分比

                    //value表示圆饼所占的比列
                    {value: 3, name: '偏低3次', label: {formatter: "{d}%"}},
                    {value: 7, name: '正常7次', label: {formatter: "{d}%"}},
                    {value: 4, name: '偏高4次', label: {formatter: "{d}%"}},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
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
})