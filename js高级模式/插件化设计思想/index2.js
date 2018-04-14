(function (modules) {
    //默认配置
    var DEFAULTS={
        plugName:"ts",
        init:"click"
    };
    var API={
        //用户自定义
        config:function (options) {
            if(!options){return DEFAULTS};
            for (var key in options){//init
                DEFAULTS[key] =options[key];
                console.log(options[key]);// key:属性名  options[key]:属性值
            }
        }
    }
    modules.test=API;// modules代表window  modules.test所以外面可以直接调取

})(this);//具体功能  配置方式
test.config({init:"input"});
