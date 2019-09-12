/**
 * Created by x on 2018/4/13.
 * 主界面老人活动地图绘制脚本
 */
$(function () {

var centerPoint = {
    lng: 118.32361,
    lat: 32.282325
};

var icon = {
    url: "../../Images/MapImage/walk.svg",
    width: 32,
    height: 44
};

var points = [{
    lng: 118.319856,
    lat: 32.28322917,

},
    {
        lng: 118.315832,
        lat: 32.274575,
        isOpen: true
    },
    {
        lng:118.312697,
        lat:32.268885
    },
    {
        lng:118.332972,
        lat:32.276883,
        isOpen: true
    },
    {
        lng:118.334121,
        lat:32.262656

    },
    {
        lng:118.327582,
        lat:32.277005
    }
];

var menus = [
    {
        id: 1,
        icon: "../../Images/MapImage/end.svg",
        title: "10:00出门",
        cb: callback
    },
    {
        id: 2,
        icon: "../../Images/MapImage/walk1.svg",
        title: "11:10途径点",
        cb: callback
    },
    {
        id:3,
        icon: "../../Images/MapImage/start.svg",
        title: "12:00终点",
        cb: callback
    },
];

// 回调函数
function callback(ele, data){
test1();
}

// 实例化
new MapPieMenu({
    id: "allmap",
    centerPoint: centerPoint,
    points: points,
    menus: menus,
    zoom: true,//在地图区域中，可以实现鼠标放大缩小地图
    Maptype:  ["地图", "卫星"]
});

})

function test1(){
    // 百度地图API功能
    var flag=0;
    var map = new BMap.Map("allmap");
    var centerpoint=new BMap.Point(118.32361,32.282325);
    map.centerAndZoom(centerpoint,17);
    map.enableScrollWheelZoom(true);//启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom(true);    //启用地图惯性拖拽，默认禁用
    var bounds = null;
    var linesPoints = null;
    var timeflag=0;
    var spoi1 = new BMap.Point(118.318257,32.280173);    //起点1
    var epoi = new BMap.Point(118.326323,32.28147);//停留点
    var spoi2 = new BMap.Point(118.320592,32.282707);    //终点
    var navigationControl = new BMap.NavigationControl({
     // 靠左上角位置
     anchor: BMAP_ANCHOR_TOP_LEFT,
     // LARGE类型
     type: BMAP_NAVIGATION_CONTROL_LARGE,
     // 启用显示定位
     enableGeolocation: true
     });
     map.addControl(navigationControl);
     // 添加定位控件
     var geolocationControl = new BMap.GeolocationControl();
     geolocationControl.addEventListener("locationSuccess", function(e){
     // 定位成功事件
     var address = '';
     address += e.addressComponent.province;
     address += e.addressComponent.city;
     address += e.addressComponent.district;
     address += e.addressComponent.street;
     address += e.addressComponent.streetNumber;
     alert("当前定位地址为：" + address);
     });
     geolocationControl.addEventListener("locationError",function(e){
     // 定位失败事件
     alert(e.message);
     });
     map.addControl(geolocationControl);
    var myIcon = new BMap.Icon("../../Images/MapImage/road.svg", new BMap.Size(32, 70), {imageOffset: new BMap.Size(0, 0)});

    function initLine(){
        bounds = new Array();
        linesPoints = new Array();
        map.clearOverlays();// 清空覆盖物
        var polygon = new BMap.Polygon([
            new BMap.Point(118.318257,32.280173),
            new BMap.Point(118.31734,32.281043),
            new BMap.Point(118.318562,32.284004),
            new BMap.Point(118.32379,32.28463),
            new BMap.Point(118.322263,32.280906)
        ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});//创建多边形
        map.addOverlay(polygon);
        var driving3 = new BMap.WalkingRoute(map,{onSearchComplete:drawLine});  // 驾车实例,并设置回调
            driving3.search(spoi1, epoi);
        setTimeout(function(){
            timeflag=timeflag+1;
            run();
       },1500);
       // 搜索一条线路
   }
   function excuteanotherline() {
       bounds = new Array();
       linesPoints = new Array();
       var driving4 = new BMap.WalkingRoute(map,{onSearchComplete:drawLine});  // 驾车实例,并设置回调
       driving4.search(epoi, spoi2);
      setTimeout(function(){
           timeflag=timeflag+1;
           run();
       },1500);
   }
    function run(){
        for(var m = 0;m < linesPoints.length; m++) {
            var pts = linesPoints[m];
            var len = pts.length;
         var carMk = new BMap.Marker(pts[0], {icon: myIcon});
         map.addOverlay(carMk);
         resetMkPoint(1, len, pts, carMk);
        }

    }
    function resetMkPoint(i,len,pts,carMk){
        carMk.setPosition(pts[i]);
        if(i < len){
            setTimeout(function(){
                i++;
                resetMkPoint(i,len,pts,carMk);
            },200);
        }
        else if(timeflag<2){excuteanotherline();}
    }
    function drawLine(results) {
        var opacity = 0.45;
        var planObj = results.getPlan(0);
        var b = new Array();
        var addMarkerFun = function (point, imgType, index, title) {
            var url;
            var width;
            var height
            var myIcon;
            var labelmarker,timemarker;
            // imgType:1的场合，为起点和终点的图；2的场合为车的图形
            if (imgType == 1 && flag==0) {
                url = "../../Images/MapImage/local.svg";
                labelmarker="出门";

                flag=1;
            }
            else if(imgType == 0) {
                url = "../../Images/MapImage/local.svg";
                labelmarker="终点"

            }
            else if(flag==1){
                url = "../../Images/MapImage/local.svg";
                labelmarker="途经点1";
            }
            width = 30;
            height = 30;
            myIcon = new BMap.Icon(url, new BMap.Size(width, height));
            var marker = new BMap.Marker(point, {icon: myIcon});
            map.addOverlay(marker);
            var label = new BMap.Label(labelmarker, {offset: new BMap.Size(-55,0)});
            var label1 = new BMap.Label(timemarker, {offset: new BMap.Size(30,0)});
            label.setStyle({
                width: "55px",
                color: '#fff',
                background: '#095093',
                border: '1px solid "#ff8355"',
                borderRadius: "5px",
                textAlign: "center",
                height: "20px",
                maxWidth: "none",
                fontSize:"14px",
                fontWeight:"400",
            });
            label1.setStyle({
                width: "35px",
                color: '#000000',
                background: '#ff8355',
                border: '1px solid "#ff8355"',
                borderRadius: "5px",
                textAlign: "center",
                height: "15px",
                maxWidth: "none"

            });
            marker.setLabel(label);
            //marker.setLabel(label1);
        }
         var addPoints = function (points) {
                for (var i = 0; i < points.length; i++) {
                    bounds.push(points[i]);
                    b.push(points[i]);
                }
            }
            // 绘制驾车步行线路
            for (var i = 0; i < planObj.getNumRoutes(); i++) {
                var route = planObj.getRoute(i);
                if (route.getDistance(false) <= 0) {
                    continue;
                }
                addPoints(route.getPath());
                // 驾车线路
                if (route.getRouteType() == BMAP_ROUTE_TYPE_DRIVING) {
                    map.addOverlay(new BMap.Polyline(route.getPath(), {
                        strokeColor: "#0030ff",
                        strokeOpacity: opacity,
                        strokeWeight: 6,
                        enableMassClear: true
                    }));
                } else {
                    // 步行线路有可能为0
                    map.addOverlay(new BMap.Polyline(route.getPath(), {
                        strokeColor: "#EB0B0A",
                        strokeOpacity: 1.5,
                        strokeWeight: 2,
                        strokeRadius:20,
                        enableMassClear: true
                    }));
                }
            }
            // 开始点
            addMarkerFun(results.getStart().point, 1, 0);
            // 终点
            addMarkerFun(results.getEnd().point, 0, 0);
            linesPoints[linesPoints.length] = b;


    }
    initLine();

}