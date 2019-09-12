$(document).ready(function() {
    $('#calendar_3').fullCalendar({
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
        //纵横比
        aspectRatio:1.8,
        //是否自动调整日历大小
        handleWindowResize:true,
        // defaultDate: '2018-03-12',不设置以当前日期为准
        navLinks: true,
        editable: false,//是否可编辑，默认不可编辑
        eventLimit: true,
        events: [
            {
                title: '吃饭异常',
                start: '2018-05-02T16:00:00',
                end: '2018-05-02T8:00:00',
                color:'red'
            },
            {
                title: '看电视异常',
                start: '2018-05-07',
                end: '2018-05-07',
                color: 'orange'
            },
            {
                title: '使用空调',
                start: '2018-05-10',
                color:'#8FBC8F'
            },
            {
                title: '使用空调',
                start: '2018-05-15T05:00:00',
                end: '2018-05-15T06:00:00',
                color: '#8FBC8F'
            },
            {
                title: '看电视',
                start: '2018-05-20T05:00:00',
                end: '2018-05-20T06:00:00',
                color: 'orange'
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