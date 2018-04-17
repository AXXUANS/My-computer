(function ($) {
    var options={
        spec:"slide",
        effect:1000,/*效果延迟*/
        asy:false,
        /*如果为true代表是异步请求数据 需要配置url 如果是false 那么直接根据data里面的数据读取*/
        url:"",
        data:[],
        onHandler:function ($target,url) {}
    };
    var _proto_ = {
        init:function() {
            this._$ele=$(this).addClass("navigate-wrapper");
            _proto_.initLogo.call(this);
            _proto_.initData.call(this);
        },
        initLogo:function() {
           var $logo=$('<h4 class="navigate-title'+(this.ops.logoClass||"")+'"></h4>')
            this._$ele.append($logo);
        },
        initData:function() {
           //如果异步则是通过ajax获取
            var _self=this;
            if(this.ops.asy){
                // alert(this.ops.url);
                $.getJSON(this.ops.url,function (result) {
                    // alert(result);
                    _self.ops.data=result;
                    _proto_.genData.call(_self,_self._$ele,_self.ops.data,true);
                })
            }else{
                _proto_.genData.call(this,this._$ele,this.ops.data,true);//传给他三个参数
            }

        },
        genData:function ($parent,data,root) {
            var item,$i;
            var $ul=$('<ul'+(root?' class="navigate-root" ':'')+'></ul>');

            for (var i=0;i<data.length;i++){
                item=data[i];
                $i=$(' <li><a href="#" '+(root?'class="navigate-item-ico'+item.ico+'"':'')+' data-url="'+item.url+'">'+item.text+'</a></li>')
                $ul.append($i);
                if(item.childs&&item.childs.length>0){
                    // console.log('dsa');
                    _proto_.genData.call(this,$i,item.childs,false);
                }
            }
            // this._$ele.append($ul)
            $parent.append($ul)
        },
        handleEvent:function () {
            alert(222);
            var _self=this;
            console.log(this._$ele);
            // $("a",this._$ele).off("click").on("click",function () {
                $(" a ",this._$ele).click(function () {
                alert(111);
                //首先判断这个a标签下面有没有子菜单
                var $child =$(this).next();
                console.log($child);
                if($child.size()==0){
                   _self.ops.onHandler.call(_self,$(this),$(this).data("url"))
                }else {
                    $child.slideToggle();
                }
            })
        }
    };

    $.fn.dnNavigate=function (ops) {
        this.ops=ops||{};
        this.ops=$.extend(options,ops);
        // console.log( this.ops)
        _proto_.init.call(this);
        _proto_.handleEvent.call(this);
    }
})(jQuery);