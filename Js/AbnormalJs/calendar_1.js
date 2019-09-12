$(document).ready(function() {
    $('#calendar_1').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'//,listWeek列表
        },
        monthNames: ["一月", "二月", "三月", "四月",
            "五月", "六月", "七月", "八月", "九月",
            "十月", "十一月", "十二月"
        ],
        //设置月份的简称
        monthNamesShort: ["一月", "二月", "三月",
            "四月", "五月", "六月", "七月", "八月",
            "九月", "十月", "十一月", "十二月"
        ],
        dayNames: ["周日", "周一", "周二", "周三",     //设置星期名称
            "周四", "周五", "周六"],
        dayNamesShort: ["周日", "周一", "周二",       //设置星期简称
            "周三", "周四", "周五", "周六"],
        today: ["今天"],                              //today 按钮的显示名称
        buttonText: {                                 //设置按钮文本
            today: '今天',
            month: '月',
            week: '周',
            day: '日',
            prev: '上一月',
            next: '下一月'
        },
        aspectRatio:1.7,
        handleWindowResize:true,
        // height:300,//自定义
        // width:300,
        // defaultDate: '2018-03-12',不设置以当前日期为准
        navLinks: true,
        editable: false,//是否可编辑，默认不可编辑
        eventLimit: true,
        // theme:false,
        events: [
            {
                id: 'xueya',//血压
                title: '血压偏高',
                start: '2018-05-01',
                color:'#63B8FF'
            },
            {
                title: '体温异常',
                start: '2018-05-07',
                end: '2018-05-07',
                color: '#CD96CD'
            },
            {
                title: 'BMI异常',
                start: '2018-05-10',
                color:'#8FBC8F'
            },
            {
                id: 'xuetang',//血糖
                title: '血糖偏高',
                start: '2018-05-09',
                color:'orange'
            },
            {
                id: 'xuetang',//血糖
                title: '血糖偏高',
                start: '2018-05-16',
                color:'orange'
            },
            {
                id: 'xueya',//血压
                title: '血压偏高',
                start: '2018-05-16',
                color:'#63B8FF'
            },
            {
                id:'xinlv',
                title: '心率异常',
                start: '2018-05-13',
                color: 'red'
            },
            {
                id:'xinlv',
                title: '心率异常',
                start: '2018-04-20',
                color: 'red'
            },
            //跳转样例
            {
                // title: '点击可以跳转',
                // url: 'http://www.baidu.com',//url
                // start: '2018-03-24'//可以添加链接
            }
        ]
    });
});