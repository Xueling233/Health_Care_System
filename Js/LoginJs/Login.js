//打开字滑入效果
window.onload = function(){
	$(".connect p").eq(0).animate({"right":"0%"}, 6000);
	$(".connect p").eq(1).animate({"right":"0%"},6000);
};
//jquery.validate表单验证
$(document).ready(function(){
	//登陆表单验证
	$("#loginForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少3个字符
				maxlength:32,//最多32个字符
			},
			password:{
				required:true,
				minlength:6,
				maxlength:32,
			},
            verifycode:{
                required:true,
                minlength:4,
                maxlength:4,
            },
		},
		//错误信息提示
		messages:{
			username:{
				required:"用户名不能为空",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为32个字符",
				remote: "用户名已存在",
			},
			password:{
				required:"密码不能为空",
				minlength:"密码至少为6个字符",
				maxlength:"密码至多为32个字符",
			},
            verifycode:{
                required:"验证码不能为空",
            },
		},
		//所有表单验证通过后，进入主界面
        submitHandler: function() { location.href ="Html/MainHtml/MainDashboard.html";}
    });
	//注册表单验证
	$("#registerForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少6个字符
				maxlength:32,//最多20个字符
				remote:{
					url:"http://kouss.com/demo/Sharelink/remote.json",//用户名重复检查，别跨域调用
					type:"post",
				},
			},
			password:{
				required:true,
				minlength:3,
				maxlength:32,
			},
			email:{
				required:true,
				email:true,
			},
			confirm_password:{
				required:true,
				minlength:3,
				equalTo:'.password'
			},
			phone_number:{
				required:true,
				phone_number:true,//自定义的规则
				digits:true,//整数
			}
		},
		//错误信息提示
		messages:{
			username:{
				required:"用户名不能为空",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为32个字符",
				remote: "用户名已存在",
			},
			password:{
				required:"密码不能为空",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
			email:{
				required:"请输入邮箱地址",
				email: "请输入正确的email地址"
			},
			confirm_password:{
				required: "请再次输入密码",
				minlength: "确认密码不能少于3个字符",
				equalTo: "两次输入密码不一致",//与另一个元素相同
			},
			phone_number:{
				required:"请输入手机号码",
				digits:"请输入正确的手机号码",
			},

		},
	});
	//添加自定义验证规则
	jQuery.validator.addMethod("phone_number", function(value, element) {
		var length = value.length;
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
		return this.optional(element) || (length == 11 && phone_number.test(value));
	}, "手机号码格式错误");
});


/**绘制验证码图片**/
function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}
/**生成一个随机色**/
function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
}
drawPic();
document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    drawPic();
}

function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';
    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXYabcdefghijklmnopqrstuvwxyz123456789';
    for(var i=0; i<4; i++){
        var txt = str[randomNum(0,str.length)];
        ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
        ctx.font = randomNum(120,130)+'px SimHei'; //随机生成字体大小
        var x = 30+65*i;
        var y =120+18*i;
        var deg = randomNum(-25, 15);
        //修改坐标原点和旋转角度
        ctx.translate(x,y);
        ctx.rotate(deg*Math.PI/200);
        ctx.fillText(txt,0,0);
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg*Math.PI/200);
        ctx.translate(-x,-y);
    }
    /**绘制干扰线**/
    for(var i=0; i<8; i++){
        ctx.strokeStyle = randomColor(40,180);
        ctx.beginPath();
        ctx.moveTo( randomNum(0,width), randomNum(0,height) );
        ctx.lineTo( randomNum(0,width), randomNum(0,height) );
        ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<100; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
        ctx.fill();
    }
}



