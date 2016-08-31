/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){

    $("#home").fadeOut(4000,function(){
        location.href = "index.html";
    });
    /*轮播*/
    $('#marquee3').kxbdSuperMarquee({
        distance:746,
        time:3,
        navId:'#mar3Nav',
        direction:'left'
    });
    /*左右高度相等*/
    $(document).ready(function() {
        var rheight=$(".page_left").height();
        var lpadding=parseInt($(".page_left").css("padding-bottom"));
        $(".page_right").css("height",rheight+lpadding+"px");
    })
    /* 选项卡*/

})
