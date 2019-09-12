/**
* Created by x on 2018/3/28.
*/
$(function () {
var dom = document.getElementById("battery");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '物品报警情况',
        subtext: '如下',
        left: 'center'
    },
    tooltip : {
        show: true,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['手环', '钱包','拐杖','钥匙']
    },
    series : [
        {
            name:'报警时长',
            type:'pie',
            radius: '65%',

            label: {
                normal: {
                    position: 'inner'
                }
            },
            data:[
                {value:0.5, name:'钱包'},
                {value:1.5, name:'拐杖'},
                {value:4.5, name:'手环'},
                {value:2.5, name:'钥匙'}
            ]
        },
        {
            name:'报警时长',
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:0.5,
                    name: '钱包',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '   {valueHead|时间点}                       {timesHead|报警次数/周}',
                                '{hr|}',
                                ' 7:30-8:30                {times|21}',
                                ' 12:30-13:30             {times|2}',
                                ' 17:30-19:30             {times|5}'
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
                                    width: 50 ,
                                    padding: [0, 20, 0., 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#777',
                                    width: 20,
                                    padding: [0, 10, 0, 0],
                                    align: 'center'
                                },
                                times: {
                                    width: 50 ,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                timesHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:1.5,
                    name: '拐杖',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '  {timeline|时间点}                {times|报警次数/周}',
                                '{hr|}',
                                '  7:30-8:30                        {times|21}',
                                '12:30-13:30                     {times|2}',
                                '17:30-19:30                     {times|5}'
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderColor: '#777',
                            borderWidth: 1 ,
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
                                    width: 50,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#777 ',
                                    width: 20,
                                    padding: [0, 10, 0, 0],
                                    align: 'center'
                                },
                                rate: {
                                    width: 50 ,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                rateHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:4.5,
                    name: '手环',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '  {valueHead|时间点}                     {timesHead|报警次数/周}',
                                '{hr|}',
                                '  7:30-8:30                {times|21}',
                                '12:30-13:30              {times|2}',
                                '17:30-19:30              {times|5}'
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
                                    width: 50 ,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#777',
                                    width: 20,
                                    padding: [0, 10, 0, 0],
                                    align: 'center'
                                },
                                times: {
                                    width: 50 ,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                timesHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:2.5,
                    name: '钥匙',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                ' {valueHead|时间点}                      {timesHead|报警次数/周}',
                                '{hr|}',
                                '7:30-8:30                 {times|21}',
                                '12:30-13:30               {times|2}',
                                '17:30-19:30               {times|5}'
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
                                    width: 50 ,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#777',
                                    width: 20,
                                    padding: [0, 10, 0, 0],
                                    align: 'center'
                                },
                                times: {
                                    width: 50,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                timesHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
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

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

})