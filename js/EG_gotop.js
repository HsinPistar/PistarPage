//快捷鍵ctrlKC  ctrlKU 

//go top
$(function () {
    
    $('#goTop').addClass("hidden");
    $("#goTop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#goTop').removeClass("hidden");
            $('#goTop').fadeIn("fast");
        } else {
            $('#goTop').stop().fadeOut("fast");
        }
    });
});


//選單置頂

var windowTop = 0;//初始话可视区域距离页面顶端的距离
$(window).scroll(function () {
    var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
    if (scrolls == 0) {
        $('.navselect').removeClass("navbarup");  //頁面到頂端時回復到原本的nav
    }else if(scrolls >= windowTop) {//当scrolls>windowTop时，表示页面在向下滑动
        //需要执行隐藏导航的操作
        $('.navselect').removeClass("navbarup");
        windowTop = scrolls;
    } else {
        //需要执行显示导航动画操作
        $('.navselect').addClass(" navbarup");
        windowTop = scrolls;
    }
    
});


//選單滑動
$(function () {

    $("li.active").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    $("#go01").click(function () {
        $("html,body").animate({
            scrollTop: $("#01").offset().top
        }, 1000);
    });
    $("#go02").click(function () {
        $("html,body").animate({
            scrollTop: $("#02").offset().top
        }, 1000);
    });
    $("#go03").click(function () {
        $("html,body").animate({
            scrollTop: $("#03").offset().top
        }, 1000);
    });
    $("#go04").click(function () {
        $("html,body").animate({
            scrollTop: $("#04").offset().top
        }, 1000);
    });
    $("#go05").click(function () {
        $("html,body").animate({
            scrollTop: $("#05").offset().top
        }, 1000);
    });
    $("#go06").click(function () {
        $("html,body").animate({
            scrollTop: $("#06").offset().top
        }, 1000);
    });
    
});



//滾動觸發 animate  

//關於我們
$(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
      $('.aboutbox1').addClass("animate__animated animate__slideInLeft");
    $('.aboutbox2').addClass("animate__animated animate__slideInRight");
      } else {
      $('.aboutbox1').removeClass("animate__animated animate__slideInLeft");
    $('.aboutbox2').removeClass("animate__animated animate__slideInRight");
      }
});

$(window).scroll(function () {
    last=($('.logocolor').height()+$('.banner').height())
          if ($(window).scrollTop() >= last) {
          $('.businesspic').addClass("animate__animated animate__fadeInBottomLeft");
            $('.businessbox ul li').addClass("animate__animated animate__zoomIn");
          } else {
          $('.businesspic').removeClass("animate__animated animate__fadeInBottomLeft");
         $('.businessbox ul li').removeClass("animate__animated animate__zoomIn");
          }
});

//遊戲類別
$(window).scroll(function () {
    last=( $('.logocolor').height()+$('.banner').height()+$('.businesspic').height() )
      if ( $(this).scrollTop() >= last) {
          $('.gamebox1').addClass("animate__animated animate__fadeInLeft");
          $('.gamebox2').addClass("animate__animated animate__fadeInLeft");
          $('.gamebox3').addClass("animate__animated animate__fadeInLeft");
          $('.gamebox4').addClass("animate__animated animate__fadeInRight");
          $('.gamebox5').addClass("animate__animated animate__fadeInRight");
          $('.gamebox6').addClass("animate__animated animate__fadeInRight");
      } else {
          $('.gamebox1').removeClass("animate__animated animate__fadeInLeft");
          $('.gamebox2').removeClass("animate__animated animate__fadeInLeft");
          $('.gamebox3').removeClass("animate__animated animate__fadeInLeft");
          $('.gamebox4').removeClass("animate__animated animate__fadeInRight");
          $('.gamebox5').removeClass("animate__animated animate__fadeInRight");
          $('.gamebox6').removeClass("animate__animated animate__fadeInRight");
      }
});

//聯絡我們
$(window).scroll(function () {
      last=( ($('.about').height()+$('.containback').height())-($('.contactpic').height()+$('.contactpic').height()))
      if ($(window).scrollTop() >= last) {
      $('.contactpic img').addClass("animate__animated animate__fadeInBottomRight");
      $('.contactbox').addClass("animate__animated animate__zoomInRight");
      } else {
      $('.contactpic img').removeClass("animate__animated animate__jackInTheBox");
    $('.contactbox').removeClass("animate__animated animate__zoomInRight");
      }
});

//合作夥伴
$(window).scroll(function () {
      last=($('.about').height()+$('.containback').height()+$('.contacttitle').height())
      if ($(window).scrollTop() >= last) {
      $('.big-demo').addClass("animate__animated animate__fadeIn");
      } else {
      $('.big-demo').removeClass("animate__animated animate__fadeIn");
      }
});
