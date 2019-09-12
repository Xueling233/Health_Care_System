turn();
function turn(){
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '翻身情况',
            subtext: '每日情况',
            left: 'center'
        },
        tooltip : {
            show: false,
            trigger: 'item',
        },
        series : [
            {
                name:'百分比',
                type:'pie',
                radius: '65%',
                center: ['50%', '50%'],

                label: {
                    normal: {
                        position: 'inner',
                        fontSize : 40
                    }
                },
                data:[
                    {value:5.1, name:'翻身情况',label:{formatter:"翻身次数:5次\n正常"}},
                ]
            },
            {

                type: 'pie',
                radius : '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data:[
                    {
                        value:5,
                        name: '翻身情况',
                        label: {
                            normal: {
                                formatter: [
                                    '{title|{b}}{abg|}',
                                    '{valueHead|第几次翻身}{timesHead|翻身时间点}',
                                    '{hr|}',
                                    '{value|第一次翻身}{times|21:00}',
                                    '{value|第二次翻身}{times|23:30}',
                                ].join('\n'),
                                backgroundColor: '#eee',
                                borderColor: '#777',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    title: {
                                        color: '#eee',
                                        align: 'center'
                                    },
                                    abg: {
                                        backgroundColor: '#333',
                                        width: '100%',
                                        align: 'right',
                                        height: 25,
                                        borderRadius: [4, 4, 0, 0]
                                    },

                                    hr: {
                                        borderColor: '#777',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    value: {
                                        width: 25 ,
                                        padding: [2, 20,10,20],
                                        align: 'right'
                                    },
                                    valueHead: {
                                        color: '#777',
                                        width: 20,
                                        padding: [0, 50, 0, 40],
                                        align: 'center'
                                    },
                                    times: {
                                        width: 50 ,
                                        align: 'right',
                                        padding: [0, 25, 0, 0]
                                    },
                                    timesHead: {
                                        color: '#333',
                                        width: 40,
                                        align: 'center',
                                        padding: [0, 25, 0, 10]
                                    }
                                }
                            }
                        }
                    }
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
        myChart.setOption(option, true);
    }
}