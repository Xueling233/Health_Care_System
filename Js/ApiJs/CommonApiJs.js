
/**
 * Created by x on 2018/5/2.
 * 获取传递数据
 */
function PostDataAsJson(PostDataJsonUrl,MethodName) {

    //获取本地请求json文件的数据，用作请求
    $.getJSON(PostDataJsonUrl, function (MethodPostData) {
        //调用公共请求方法
       CommonAjax(MethodName,MethodPostData);
    });
}

/**
 * Created by x on 2018/5/2.
 *ajax请求，将json数据发送到后端服务器，公共方法
 */
function  CommonAjax(MethodName,MethodPostData) {
    $.ajax({
        //请求方式，ajax跨域请求数据
        type: "post",
        //后台服务器的url+接收处理程序的请求方法
        url: "http://10.200.236.223:8000/"+MethodName+"/",
        //请求方式为post时需要传递给服务器的数据信息
        data:MethodPostData,
        //返回数据格式为json
        dataType: "json",
        //请求成功后要执行的函数，返回给不同的调用方法
        success: function (data) {//data保存放回的结果
            CallBackSuccess(data);
        },
        //请求失败要执行的函数
        error: function (data) {
            CallBackFail();
        }
    })
}
