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
            
      
            
            
      
         