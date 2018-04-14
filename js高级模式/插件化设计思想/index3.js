(function (modules, factory) {
    window.Test = factory();
})(this, function () {
    //默认配置
    var DEFAULTS = {
        plugName: "ts",
        init: "click"
    };
    var Test = function (options) {
        //默认配置 用户配置  添加到一个新的对象上去
        this.extend(this, DEFAULTS, options);
    };
    Test.extend = Test.prototype.extend = function () {
        var length = arguments.length;
        var target = arguments[0] || {};
        var i = 1,name;
        if (typeof target !== "object" || typeof target !== "function") {
            target = {};
        }//让扩展对象  不可为数字之类的无法扩展属性
        if (length == 1) {
            target=this;
            i--;
        }
        for (;i<length;i++){ // 1<个数2
            for(name in arguments[i]){
                console.log(name);
                target[name]=arguments[i][name];
            }
        }
        console.log(target);
        return target;
    };
    // Test.extend({
    //     //扩展
    // });
    return Test;

});//具体功能  配置方式

// new Test({
//     init: "input"
// });
// console.log(new Test({init: "input"}).extend);
// console.log(Test.extend);
//测试
var obj1={name:"mac"};
var obj2={age:22};
var a=Test.extend(function () {
  this.name="Fa";
},obj1,obj2);
console.log(a);
/*扩展方法*/
// Test.extend({
//     //扩展
// });