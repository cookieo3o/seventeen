jQuery(document).ready(function () {

    // 서브 메뉴 부분
    $(".nav > .bar").mouseover(function () {
        $(".submenu").stop().animate({ left: "-360px" });
    });
    $(".submenu").mouseover(function () {
        $(".submenu").stop({ left: "-360px" });
        $(".bar1").addClass("plus");
        $(".bar3").addClass("plus");
        $(".bar1").stop().animate({ rotate: "-30deg" }, 200);
        $(".bar3").stop().animate({ rotate: "30deg" }, 200);
    });

    $(".nav > .bar").mouseout(function () {
        $(".submenu").stop().animate({ left: "140px" });
    });
    $(".submenu").mouseout(function () {
        $(".submenu").stop().animate({ left: "140px" });
        $(".bar1").stop().animate({ rotate: "0deg" }, 200);
        $(".bar3").stop().animate({ rotate: "0deg" }, 200);
        $(".bar1").removeClass("plus");
        $(".bar3").removeClass("plus");
    });

    $(".nav > .bar").mouseover(function () {
        $(".bar1").addClass("plus");
        $(".bar3").addClass("plus");
        $(".bar1").stop().animate({ rotate: "-30deg" }, 200);
        $(".bar3").stop().animate({ rotate: "30deg" }, 200);
    });
    $(".nav > .bar").mouseout(function () {
        $(".bar1").stop().animate({ rotate: "0deg" }, 200);
        $(".bar3").stop().animate({ rotate: "0deg" }, 200);
        $(".bar1").removeClass("plus");
        $(".bar3").removeClass("plus");

    });

    // 팝업 부분
    $(".me1").click(function () {
        $("#modal1").addClass("active");
    });

    $(".me2").click(function () {
        $("#modal2").addClass("active");
    });
    
    $(".me3").click(function () {
        $("#modal3").addClass("active");
    });
    
    $(".me4").click(function () {
        $("#modal4").addClass("active");
    }); 

    $(".me5").click(function () {
        $("#modal5").addClass("active");
    });

    $(".me6").click(function () {
        $("#modal6").addClass("active");
    });

    $(".me7").click(function () {
        $("#modal7").addClass("active");
    });

    $(".me8").click(function () {
        $("#modal8").addClass("active");
    });

    $(".me9").click(function () {
        $("#modal9").addClass("active");
    });

    $(".me10").click(function () {
        $("#modal10").addClass("active");
    });

    $(".me11").click(function () {
        $("#modal11").addClass("active");
    });

    $(".me12").click(function () {
        $("#modal12").addClass("active");
    });

    $(".me13").click(function () {
        $("#modal13").addClass("active");
    });
    
    //닫기 부분 한 번만
    $(".close").click(function(){
        $(this).parent().parent().removeClass("active");
    });
    
    //홈 버튼 부분
    $("#home > a > img").mouseover(function () {
        $("#home > a > img").attr("src", "./img/home_on.png");
    });
    $("#home > a > img").mouseout(function () {
        $("#home > a > img").attr("src", "./img/home.png");
    });


});