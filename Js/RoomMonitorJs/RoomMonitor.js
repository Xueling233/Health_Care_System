/**
 * Created by x on 2018/5/12.
 */

    $(document).ready(function() {
        var chart = {
            type: 'spline',
            backgroundColor: '#feffeb',

            events: {
                load: function () {
// set up the updating of the chart each second
                    var series = this.series[0];
                    i=5;
                    y=0;
                    setInterval(function () {
                        var x = ((new Date()).getTime())// current time
                        if(i<=0){y=1;i=20;}
                        else if(i<=16){y=0;}
                        var datax=[x,y]
                        series.addPoint(datax,true,true);
                        // alert(datax.dataLabels);
                        /* if(y==1 && i==20){
                         series.update({
                         dataLabels: {
                         enabled:true,
                         formatter: function () {
                         return Highcharts.dateFormat('%H:%M', this.x) + '<br/>' + "使用燃气"},
                         }});}
                         else if(y==0 && i==16){
                         series.update({dataLabels: {
                         enabled:true,
                         formatter: function () {
                         return Highcharts.dateFormat('%H:%M', this.x) + '<br/>' +
                         "无活动"
                         }

                         }});}
                         else {series.update({dataLabels: {enabled:false,}})}
                         */
                        i--;
                    },1000);
                }
            }

        };
        var title = {
            text: '动态图'
        };
        var xAxis = {
            type: 'datetime',
            title: {
                text: '时间'
            }
        };
        var yAxis = {
            title: {
                text: '变化'
            },
            visible:false,
            min:0,
            max:1
        };
        var plotOptions = {
            area: {
                pointStart: 0,
            }

        };
        var tooltip={
            enabled:true,
            formatter: function () {
                return Highcharts.dateFormat('%H:%M', this.x) + '<br/>' +
                    "无活动"
            }

        }
        var legend = {
            enabled: false
        };
        var exporting = {
            enabled: true
        };
        var series= [{
            marker: {
                enabled: true
            },

            data:(function () {
// generate an array of random data
                var data = [],time = (new Date()).getTime(),i;
                for (i = -10; i <= 0; i += 1) {
                    data.push({
                        x: time + i ,
                        y:  0,
                        dataLabels: {
                            borderRadius: 5,
                            backgroundColor: 'rgba(252, 255, 197, 0.7)',
                            borderWidth: 1,
                            borderColor: '#AAA',

                        },
                    });
                }
                return data;
            }())
        }];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.legend = legend;
        json.exporting = exporting;
        json.series = series;
        json.plotOptions = plotOptions;
        json.tooltip=tooltip;
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        $('#monitor').highcharts(json);
    });
