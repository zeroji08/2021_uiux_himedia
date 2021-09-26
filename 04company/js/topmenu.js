$(function(){
    var $firstmenu = $('.gnb > ul > li'),
        $header = $('#headerTopWrap'),
        $subMenu = $('#headerTop > .gnb > ul > li > .sub');
     $firstmenu.mouseenter(function(){
        $header.stop().animate({height:'300px'},300);
        $subMenu.stop().animate({opacity:'1'},300);
     })
     .mouseleave(function(){
         $header.stop().animate({height:'100px'},300);
         $subMenu.stop().animate({opacity:'0'},300);
     })
 });