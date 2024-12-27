$(function(){
    //윈도우 오픈 시
    $(window).on('load',function(){
        $(".topBar").animate({width: "100%"},600);
        $(".heroText").delay(600).animate({top: "120px", opacity: 1},500);
        $(".heroArrow").delay(1100).slideDown(700);
        if($(window).scrollTop() < 830){
            $("html, body").delay(1100).animate({scrollTop : 32},700);
        }
        $(".Ex30").delay(1800).animate({ top: "310px", opacity: 1},500);
    })
    
    // 스크롤바 내렸을 때
    $(window).scroll(function(){
        //스크롤 시 메뉴 슬라이드 업
        if($("nav").is(":visible")){
            $("nav").slideUp(500);
        }

        let sT = parseInt($(this).scrollTop()); //scrollTop 불러옴
        console.log(sT);
        if(sT>830){
            $(".topBar").css({backgroundColor: "rgba(30, 36, 48, 1)"});
        }else{
            $(".topBar").css({backgroundColor: "rgba(30, 36, 48, 0.7)"});
        }
        if(sT>=300){
         $('#con1 .title').animate({opacity: 1}, 500);
         $('.modalBox').animate({marginTop: 0}, 600);
        }
        if(sT>=1084){
         $('#con2 .title').animate({opacity: 1}, 500);
         $('.whyBox').animate({marginTop: "40px"}, 600);
        }
        if(sT>=1900){
         $('#con3 .title').animate({opacity: 1}, 500);
         $('#con3 .subTitle').animate({opacity: 1}, 500);
         $('.aboutBox').delay(50).animate({marginTop: "40px"}, 600);
        }
        if(sT>=2666){
         $('#con4 .title').animate({opacity: 1}, 600);
         $('#con4 .subTitle').animate({opacity: 1}, 600);
        }
        if(sT>=3200){
         $('#con5 .title').animate({opacity: 1}, 500);
         $('.quickBox').animate({marginTop: "40px"}, 700);
        }
    });

    //위로가기(Back to top)
    $(".back").click(function(){
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // 사진이벤트
    $(".mB .reser").mouseenter(function(){
        $(this).closest('.mB').find('.modal').addClass("expand");
    }).mouseleave(function(){
        $(this).closest('.mB').find('.modal').removeClass("expand");
    });

    //메뉴바 색상 이벤트
    $(".topBar").mouseenter(function(){
        $(this).addClass("barEvent")
    }).mouseleave(function(){
        $(this).removeClass("barEvent")
    });

    $(".menu img").click(function(){
        $(".topBar").css({ backgroundColor: "#1E2430"});
    });
    
    //메뉴 - 슬라이드 다운
    $(".textMenu").click(function(){
        if ($(".menu2").is(":visible")){
            return;
        } //다른메뉴 열려있으면 동작 못하게 하기
        $(".menuTitle").eq(0).click();
        $(".menu1").slideDown(500);
    });
    $(".carMenu").click(function(){
        if ($(".menu1").is(":visible")){
            return;
        }
        $(".menuTitle").eq(3).click();
        $(".menu2").slideDown(500);
    });

   function toggleMenu(){
    if($(window).width() > 1124){
        $(".menuTitle").off("click").on("click",function(){
            $(".menuTitle").removeClass("menuClick");
            $(this).addClass("menuClick");

            $(".submenu").hide();
            $(this).siblings(".submenu").show();
        });
    }else{
        $(".menuTitle").off("click");
        $(".submenu").show();

        $(".sB>li").off("click").on("click",function(){
            $(".submenu ul").slideUp(300); //메뉴 초기화
            $(".sB>li").removeClass("sbEvent");
            $(this).children("ul").stop().slideDown(300);
            $(this).addClass("sbEvent");
        });
    }
   }
   toggleMenu();

   $(window).resize(function(){
    toggleMenu();
   });
   
    //메뉴 - 슬라이드 업
    $(".menuClose").click(function(){
        $("nav").slideUp(500);
        setTimeout(function(){
            $(".topBar").css({backgroundColor: "rgba(30, 36, 48, 0.7)"});
        },500);
    }); //닫기버튼 누르면 슬라이드 업
    if($(window).width()<=1124){
        $(".menuClose").click(function(){
            $(".sB ul").slideUp(200);
            $(".sB li").removeClass("sbEvent");
        });
    }
    $(window).resize(function(){
        if($("nav").is(":visible")){
            $(".menuClose").click();
        }
    }); //리사이즈 시 슬라이드 업

    //#con1 - 버튼클릭
    $(".lBtn").click(function() {
        let first = $(".mB").first();
        let others = $(".mB").not(":first");

        // 첫 번째 요소를 맨 뒤로 보내기
        first.animate({ left: "-=318px" }, 300, function(){
            $(this).css({opacity: 0});
            $(this).appendTo(".modalBox").css("left", "954px"); // 맨 뒤로 보내고 left를 초기화
            $(this).animate({opacity: 1}, 200);
        });
    
        // 나머지 .mB 요소들을 슬라이딩
        others.each(function() {
            $(this).animate({ left: "-=318px" }, 300);
        });
    });

    $(".rBtn").click(function() {
        let last = $(".mB").last();
        let others = $(".mB").not(":last");

        // 첫 번째 요소를 맨 뒤로 보내기
        last.animate({ left: "+=318px" }, 300, function(){
            $(this).css({opacity: 0});
            $(this).prependTo(".modalBox").css("left", "0px"); // 맨 뒤로 보내고 left를 초기화
            $(this).animate({opacity: 1}, 200);
        });
    
        // 나머지 .mB 요소들을 슬라이딩
        others.each(function() {
            $(this).animate({ left: "+=318px" }, 300);
        });
    });
    
    

    //#con2 - 이미지 슬라이드
    $(".top").click(function(){
        $(".wB").first().insertBefore('.whyBox .bottom');
    });
    $(".bottom").click(function(){
        $(".wB").last().insertAfter('.whyBox .top');
    });
});