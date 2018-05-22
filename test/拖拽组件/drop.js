// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23 元素的拖拽实现

var params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
};
//获取相关CSS属性
var getCss = function(o,key){
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];/*get获取样式里面详细解释*/
};
//拖拽的实现
var startDrag = function(bar, target, callback){
    // 这里获取left和top是保存初始框子的位置
    if(getCss(target, "left") !== "auto"){
        params.left = getCss(target, "left");
    }
    if(getCss(target, "top") !== "auto"){
        params.top = getCss(target, "top");
    }
    // console.log(  params.left+":"+  params.top);//获取target在窗口的距离
    //o是移动对象
    bar.onmousedown = function(event){
        params.flag = true;
        if(!event){
            event = window.event;
            //防止IE文字选中
            bar.onselectstart = function(){
                return false;
            }
        }
        var e = event;
        console.log( e.clientX+":"+ e.clientY);//获取当前整个框子在窗口的距离

        params.currentX = e.clientX;
        params.currentY = e.clientY;
    };
    document.onmouseup = function(){
        params.flag = false;
        if(getCss(target, "left") !== "auto"){
            params.left = getCss(target, "left");
        }
        if(getCss(target, "top") !== "auto"){
            params.top = getCss(target, "top");
        }
        console.log(  params.left+":"+  params.top);//最终框子在浏览器的位置
    };
    document.onmousemove = function(event){  //onmousemove即时运算
        var e = event ? event: window.event;
        if(params.flag){
            var nowX = e.clientX, nowY = e.clientY; //获取target在浏览器的距离
            var disX = nowX - params.currentX, disY = nowY - params.currentY;
            // console.log( "disX:"+ disX+"%"+"disY:"+  disY );//获取target在窗口的距离
            target.style.left = parseInt(params.left) + disX + "px";//原来的位置 加（或减 disx）得出移动的距离
            target.style.top = parseInt(params.top) + disY + "px";

            if (typeof callback == "function") {
                callback((parseInt(params.left) || 0) + disX, (parseInt(params.top) || 0) + disY);
            }

            if (event.preventDefault) {
                event.preventDefault();
            }
            return false;
        }


    }
};