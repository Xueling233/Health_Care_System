/**
 * Created by x on 2018/5/2.
 * 测试前后端数据传输
 * PostDataAsJson为公共方法，方法名固定
 * 传递需要传输的json数据以及需要后台处理的api接口方法名称
 */
$(function(){
  var MethodName = "kitchenapi";//请求后台接口方法名
  var PostDataJsonUrl="../../FrontJson/login.json";//前端数据传输json文件路径
  PostDataAsJson(PostDataJsonUrl,MethodName);
})
/**
 * Created by x on 2018/5/2.
 * 后台异步数据返回接收,成功为CallBackSuccess，失败CallBackFail
 * CallBackSuccess方法处理成功后的数据，变量名不可以修改
 * CallBackFail方法表示调用后台数据失败的处理方法，变量名不可修改
 * CallReceiveData存储后台返回数据，变量名可以修改
 */
function  CallBackSuccess(CallReceiveData) {
        alert(CallReceiveData.detail);
        x=document.getElementById("test");  // 找到元素
        x.innerHTML=CallReceiveData.detail;    // 改变内容


}

function  CallBackFail() {
    alert("服务器连接失败");
        x=document.getElementById("test");  // 找到元素
        x.innerHTML="服务器连接失败";    // 改变内容

}