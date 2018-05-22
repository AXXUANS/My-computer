/// <reference path="jquery-1.8.0.min.js" />

$(function () {
    Public.load();
});

var Public = {
    load: function () {
        $('.banner .con .box').flexslider({
            animation: "slide", //转换方式 fade淡入淡出 slide滚动
            direction: "horizontal", //滚动方向 horizontal左右 vertical上下
            slideshowSpeed: 3000, //停留时间
            directionNav: false, //是否显示左右控制按钮 true&false
            controlNav: true, //是否显示下方控制按钮 true&false
            mousewheel: false //是否允许鼠标控制滚动 true&false
        });
        $('.flex-control-paging li a').html('');
        Public.part();
    },
    part: function () {
        $(".part_left>ul>li").click(function () {
            $(this).addClass("e").siblings().removeClass("e").find(".e").removeClass("e");
        });

        $(".part_left li li").click(function () {
            $(this).addClass("e").siblings().removeClass("e");
        });
    }
}