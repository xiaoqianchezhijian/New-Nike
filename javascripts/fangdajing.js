;   
    
    
//     -------------------轮播图---------------------------
var index = 0;
var sliders = $(".slider-banner");
var timer_lb=null;
//console.log(sliders);
$("#left").on("click",prevIndex)
$("#right").on("click",nextIndex)
$(".button-banner").on("click",animate)

function prevIndex(){
    if(index === 0){
        $(".wrap-banner").css({
            left:-(sliders.length-1)*sliders.eq(0).width()
      })
          index = sliders.length - 2;
    }else{
          index --
    }
}

function nextIndex(){
    if(index === sliders.length - 1){
        $(".wrap-banner").css({
            left:0
      })

          index = 1;
    }else{
          index ++;
    }
}
function animate(){
    $(".wrap-banner")
    .stop()
    .animate({
          left : -sliders.eq(0).width() * index
    })
}

timer_lb=setInterval(function(){
    $("#right").trigger("click");
},3000)

$(".container-banner").mouseenter(function(){
    clearInterval(timer_lb)
    timer_lb=null;
})

$(".container-banner").mouseleave(function(){
    timer_lb=setInterval(function(){
          $("#right").trigger("click");
    },3000)  
})

//-------------------------- 轮播图end---------------------------




// ---------------------------help二级菜单start-----------
        $(".help").on("mouseover",function(){
            $(".helptwo").show()
        })
        $(".help").on("mouseleave",function(){
            $(".helptwo").hide()
        })
// ----------------------------help二级菜单end-----------------------------------------





// ----------------------------二级菜单start-----------------------------------
$(".nav .ns").on("mouseover",function(){
      $(".nav .newspring").show()
})
$(".nav .ns").on("mouseleave",function(){
      $(".nav .newspring").hide()
})

$(".nav .m").on("mouseover",function(){
      $(".nav .men").show()
})
$(".nav .m").on("mouseleave",function(){
      $(".nav .men").hide()
})

$(".nav .w").on("mouseover",function(){
      $(".nav .women").show()
})
$(".nav .w").on("mouseleave",function(){
      $(".nav .women").hide()
})

$(".nav .m").on("mouseover",function(){
      $(".nav .men").show()
})
$(".nav .m").on("mouseleave",function(){
      $(".nav .men").hide()
})

// ----------------------------二级菜单end------------------------------------

// --------------------------百度节流去抖start-------------------------------
var search = document.getElementById("search");
var list=document.getElementById("list")
var timer_search=null;
var Num=3;

search.addEventListener("input",handlerSearch);
function handlerSearch(){
      if(timer_search!==null){
            return false
      }
      timer_search=setTimeout(function(){
            var url=`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;
            function loadMsg(){
                  return jsonp(url,"cb")

            }
            loadMsg()
            .then(function(res){
                  console.log(res)
                  var html=""
                  res.s.every(function(item,index){
                        html+=`<li>${item}</li>`
                        return index<Num
                  })
                  list.innerHTML=html;
            })

            timer_search=null;
      },500)
 }
//  ---------------------百度节流去抖end---------------------

//---------------------搜索框光标移入变宽事件start--------------------
$("#search").on("focus",function(){
      $(".search-wrap").animate({
            width:224
      },300,"swing")
      $(".search-wrap").css({
            border: "1px solid black"
      })
      $("#list").show()
})

$("#search").on("blur",function(){
      $(".search-wrap").animate({
            width:194
      },300,"swing")
      $(".search-wrap").css({
            border: "1px solid #e5e5e5"
      })
      $("#list").hide()
})
//---------------------搜索框光标移入变宽事件end--------------------


// ------------------------放大镜start-----------------------------
    $(function(){
        changePic(".num1",0);
        changePic(".num2",1);
        changePic(".num3",2);
        changePic(".num4",3);
        changePic(".num5",4);
        var shadeWidth = $('.shade').width(),//阴影的宽度 
            shadeHeight = $('.shade').height(),//阴影的高度 
            middleWidth = $(".fangdajing_top_midwrap").width(),//容器的宽度 
            middleHeight = $(".fangdajing_top_midwrap").height(),//容器的高度 
            bigWidth = $(".fangdajing_top_bigwrap").width(),//放大图片盒子的宽度 
            bigHeight = $(".fangdajing_top_bigwrap").height(),//放大图片盒子的高度 
            rateX = bigWidth / shadeWidth,//放大区和遮罩层的宽度比例 
            rateY = bigHeight / shadeHeight;//放大区和遮罩层的高度比例 
            $('.fangdajing_top_midwrap').hover(function() { 
                $('.shade').show(); 
                $('.fangdajing_top_bigwrap').show(); 
              }, function() { 
                $('.shade').hide(); 
                $('.fangdajing_top_bigwrap').hide(); 
              }).mousemove(function(e) {//当鼠标移动时，阴影和放大区图片进行移动 
          
                //记录下光标距离页面的距离 
                var x = e.pageX, 
                    y = e.pageY; 
          
                //设置遮罩层的位置 
                $('.shade').offset({ 
                  top: y-shadeHeight/2, 
                  left: x-shadeWidth/2 
                });    
          
                //获取遮罩层相对父元素的位置 
                var cur = $('.shade').position(), 
                  _top = cur.top, 
                  _left = cur.left, 
                  hdiffer = middleHeight - shadeHeight, 
                  wdiffer = middleWidth - shadeWidth; 
                //   console.log(_top)
          
                if (_top < 0) _top = 0; 
                else if (_top > hdiffer) _top = hdiffer; 
                if (_left < 0) _left = 0;   
                else if (_left > wdiffer) _left =wdiffer; 
          
                //判断完成后设置遮罩层的范围 
                $('.shade').css({ 
                  top: _top, 
                  left: _left 
                }); 
          
                //设置放大区图片移动 
                $('.fangdajing_top_bigwrap img').css({ 
                  top: - rateY * _top, 
                  left: - rateX * _left 
                  
                }); 
               
              });
          
              //封装的改变图片显示的函数 
              function changePic (element,index) { 
                $(element).mouseenter(function() { 
                    $(this).css({
                        border:"2px solid #aaa"
                    }).siblings().css({
                        border:"2px solid #fff"
                    });
                  $('.fangdajing_top_midwrap img').eq(index).css('display', 'block').siblings().css('display', 'none'); 
                  $('.fangdajing_top_bigwrap img').eq(index).css('display', 'block').siblings().css('display', 'none'); 
                }); 
              } 
                
            });
    








// --------------------------放大镜end----------------------------




// ---------------------渲染猜你喜欢渲染和手动轮播start----------------------
$.get("../json/fangdajing.json",function(res){
    // console.log(res)
    var html="";
    var res=$(res);
    $.each(res[0].result.index.list,function(index,item){
          // console.log(res[0].result.index.list)
          html+=`<div class="shops_wrap">
                      <a href="">
                            <div class="shop_image">
                                   <img src="${item.img}" alt="">
                            </div>
                            <div class="colorsum">
                                  <span>${item.colorNum}</span>
                                  <span class="star">${item.star}</span>
                            </div>
                            <div class="shop_title">${item.title}</div>
                            <div class="shop_js">${item.miaoshu}</div>
                            <div class="shop_price">${item.price}</div>
                      </a>
                </div>`
    })
    $(".guesswrap").html(html)
})

$(".lunbor").on("click",function(){
    $(".lunbol").show()
    $(".guesswrap").animate({
        left:-1035
    },500)
})

$(".lunbol").on("click",function(){
    $(".guesswrap").animate({
        left:0
    },500)
})



// ---------------------渲染猜你喜欢事件end----------------------



// ------------底部鼠标移入微信弹出二维码事件start------------------------
      $(".weixin").on("mouseover",function(){
            $(".ewm img").show()
      })
      $(".weixin").on("mouseleave",function(){
            $(".ewm img").hide()
      })

// ------------底部鼠标移入微信弹出二维码事件end-----------------------


// -------------------返回顶部事件start-------------------------------
     $("#fanhui").on("click",function(){
            $("html,body").animate({
                  scrollTop:0
            }, 500);
      })
// -------------------返回顶部事件end------------------------- -------        
            
      
            
            
      
         