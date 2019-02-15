;

//-------------------------------- 选项卡start-----------------
function Tab(){
    this.index=0;
    this.btns=$(".dz-top div")
    this.contents=$(".dz-bottom > div")
}

Tab.prototype.init=function(){
    this.btns= Array.from(this.btns);
    this.contents=Array.from(this.contents);
    this.bindEvent()
}

Tab.prototype.bindEvent=function(){
    this.btns.forEach((item,index)=>{
        $(item).on("click",this.changeIndex.bind(this,index));
        $(item).on("click",this.changeClass.bind(this,index));
    }) 
}

Tab.prototype.changeIndex=function(index){
    this.index=index;
}

Tab.prototype.changeClass=function(index,evt){
    evt.preventDefault();                                    //移除点击a标签刷新页面的默认事件。
    $(this.contents).removeClass("active");                 //把所有的内容区删除active类名
    $(this.contents[index]).addClass("active");             //给点击事件触发的dom添加active类名

    $(this.btns).removeClass("active");                      //把所有的内容区删除active类名
    $(this.btns[index]).addClass("active")                    //给点击事件触发的dom添加active类名     
}

var tab=new Tab();
tab.init()

// -------------------------------选项卡end-------------------------------------------


//------------------------------ 向数据库中添加数据start-------------


// ------验证名户名start---------
var $user=$("#account");
var $reg_user= /^[a-zA-Z][a-zA-Z0-9]{4,15}$/;;
$user.on("blur",function(){
    if($reg_user.test($user.val())===false){
        $(".user").css({
            color:"#f00",
            opacity:1
        }).text("用户名不符合规则")
    }else{
        $(".user").css({
            color:"#0b1",
            opacity:1
        }).text("用户名输入正确")
    }
})
// -----------验证用户名end--------


// -----------验证密码start-------------
var $psd=$("#password");
var $reg_psd=/^[a-z0-9]{8,20}$/i;
$psd.on("blur",function(){
    if($reg_psd.test($psd.val())===false){
        $(".pass").css({
            color:"#f00",
            opacity:1,
        }).text("密码不符合规则")
    }else{
        $(".pass").css({
            color:"#0b1",
            opacity:1
        }).text("密码输入正确")
    }
})
// -----------验证密码end-------------


//--------验证二次输入密码start---------
var $qrpsd=$("#qrpassword");
var $reg_qrpsd=/^[a-z0-9]{8,20}$/i;
$qrpsd.on("blur",function(){
    if($reg_qrpsd.test($qrpsd.val())===false){
        $(".repass").css({
            color:"#f00",
            opacity:1
        }).text("密码不符合规则")
    }else if($qrpsd.val()===$psd.val()){
        $(".repass").css({
            color:"#0b1",
            opacity:1
        }).text("密码输入一致√")
    }else{
        $(".repass").css({
            color:"#f00",
            opacity:1
        }).text("密码两次不一致")
    }
})
//--------验证二次输入密码end---------



$(".zhuce").on("click",function(){
    if($psd.val()===$qrpsd.val()&&$reg_user.test($user.val())===true&&$reg_psd.test($psd.val())===true){
        var $data={
            username:$("#account").val(),
            qrpassword:$("#qrpassword").val(),
            password:$("#password").val()
        }
        $.ajax({
            url:"http://localhost/nike-master/php/register.php",
            data : $data,
            type: "POST",
            dataType : "json",
            success: function (msg) {
                console.log(msg)
                if (msg.stateCode === "用户名重复"){
                    alert("用户名重复")
                }else{
                    console.log(1)
                    alert("注册成功")
                    // $.cookie('用户名', $("#account").val());
                    location.href = "./index.html";
                }
            },
        })
    }else{
        alert("请按规则正确输入账号密码")
    }
})





// 验证登录信息
var $zaccount = $("#zaccount");
var $mpass = $("#mpass");

var $denglu = $(".denglu");

$denglu.on("click",function(){
    var $data = {
        username : $zaccount.val(),
        password : $mpass.val(),
    }
    // console.log($data)

    $.ajax({
        data : $data,
        type : "POST",
        dataType : "json",
        url: "http://localhost/nike-master/php/login.php",
        success: function (msg) {
            // console.log(msg)
            if (msg.stateCode === "登录成功"){
                alert("登录成功")
                $.cookie($zaccount.val(), $mpass.val());
                
                location.href = "./index.html";
            } else{
                alert("用户名或密码错误");
            }
        }


    })
})
