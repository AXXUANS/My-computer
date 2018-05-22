/// <reference path="jquery-1.8.0.min.js" />

$(function () {
    Home.load();

});
var Home = {
    load: function () {
        $(".con .item").hover(function () {
            $(this).find(".hide").show();
            return false;
        });
        $(".con .item .hide").mouseleave(function () {
            $(".con .item .hide").hide();
            return false;
        });
    }
}