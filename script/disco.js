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
    
    $(".album").children("div:gt(0)").hide();
    $(".number > .num1").click(function () {
        $(".number > .num1").attr("src", "./img/num01_on.png");
        $(".number > .num2").attr("src", "./img/num02.png");
        $(".number > .num3").attr("src", "./img/num03.png");
        $(".albumimg1").show();
        $(".albumimg2").hide();
        $(".albumimg3").hide();
    });
    $(".number > .num2").click(function () {
        $(".number > .num1").attr("src", "./img/num01.png");
        $(".number > .num2").attr("src", "./img/num02_on.png");
        $(".number > .num3").attr("src", "./img/num03.png");
        $(".albumimg2").show();
        $(".albumimg1").hide();
        $(".albumimg3").hide();
    });
    $(".number > .num3").click(function () {
        $(".number > .num1").attr("src", "./img/num01.png");
        $(".number > .num2").attr("src", "./img/num02.png");
        $(".number > .num3").attr("src", "./img/num03_on.png");
        $(".albumimg3").show();
        $(".albumimg1").hide();
        $(".albumimg2").hide();
    });


});