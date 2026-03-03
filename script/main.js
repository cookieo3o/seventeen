jQuery(document).ready(function () {

    $(".nav > .bar").mouseover(function () {
        $(".submenu").stop().animate({left:"-360px"});
      });
      $(".submenu").mouseover(function () {
        $(".submenu").stop({left: "-360px"});
        $(".bar1").addClass("plus");
        $(".bar3").addClass("plus");
        $(".bar1").stop().animate({rotate: "-30deg"}, 200);
        $(".bar3").stop().animate({rotate: "30deg"}, 200);
      });

    $(".nav > .bar").mouseout(function () {
        $(".submenu").stop().animate({left:"140px"});
    });
    $(".submenu").mouseout(function () {
        $(".submenu").stop().animate({left:"140px"});
        $(".bar1").stop().animate({rotate: "0deg"}, 200);
        $(".bar3").stop().animate({rotate: "0deg"}, 200);
        $(".bar1").removeClass("plus");
        $(".bar3").removeClass("plus");
      });

      $(".nav > .bar").mouseover(function () {
        $(".bar1").addClass("plus");
        $(".bar3").addClass("plus");
        $(".bar1").stop().animate({rotate: "-30deg"}, 200);
        $(".bar3").stop().animate({rotate: "30deg"}, 200);
      });
      $(".nav > .bar").mouseout(function () {
        $(".bar1").stop().animate({rotate: "0deg"}, 200);
        $(".bar3").stop().animate({rotate: "0deg"}, 200);
        $(".bar1").removeClass("plus");
        $(".bar3").removeClass("plus");
        
      });

});

