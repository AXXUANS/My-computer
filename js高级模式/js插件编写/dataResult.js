(function (window,factory,pulg) {
    factory(jQuery,pulg)
})(this,function (jQuery,pulg) {
    //插件默认设置
    var DEFALT={
        initEvent:"input",
        plugName:"dr",
    }
    // console.log(pulg)
    // $.fn[pulg]=function (options) {
    //     if(!this.is("form")){return};
    //     this.find=this.find("input");
    //     this.find.on("input",function () {
    //         console.log(this.value);
    //     })
    // }
    //数据校验引擎
    var _RULES_={
        "regexp":function(data){ //判断返回值  为true匹配成功  为false匹配不成功
            console.log(data);
            return new RegExp(data).test(this.val())
            },
        "required":function(data){
            console.log(data);
            return this.val();
            },
        "min-length":function(data){
            console.log(data);
            return this.val().length >= data;
            },
        "confirm":function(data){
            console.log(data);
            var passElement=$(":password")[0];
            if(passElement.value !=="" && passElement.value == this.val()){
                return true;
            }else{
                return false;
            }

            },
        // "max-length":function(data){ console.log(data);},
    }

    $.fn[pulg]=function (options) {
        if(!this.is("form")){return};
        this.find=this.find("input");//this
        $.extend(this,DEFALT,options);
        console.log(this.initEvent);
        this.find.on(this.initEvent,function () {//Element
            // console.log(this.value);
            // console.log(this);
            var _this=$(this);
            _this.siblings("p").remove();
            // console.log(this.data);
            $.each(_RULES_,function (key,fn) {
                var $fileName=_this.data(DEFALT.plugName+"-"+key);
                var $message=_this.data(DEFALT.plugName+"-"+key+"-message");
                console.log($fileName);
                console.log($message);
                if($fileName){//true  false
                    var result=fn.call(_this,$fileName);
                    if(!result){
                        _this.after("<p style='color:red'>"+$message+"</p>");
                    }
                }
            })
        })
    }
    $.fn[pulg].extendResult=function (options) {
        $.extend(_RULES_,options);
    }
},"detaResult");