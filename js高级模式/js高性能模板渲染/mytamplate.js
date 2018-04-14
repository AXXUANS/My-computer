(function (global, factory) {//匿名函数
    // alert(111);
    global.Template = factory;
})(this, function (options) {//this 没有实例对象   this指向的是window
    // console.log(options);
    var el = document.getElementById(options.el);
    var tem = document.getElementById(options.tem).innerHTML;//获取模板中的字符
    var data = options.data;
    // console.log(tem,data);
    /*
    * if 判断太多不可取
    * 正则+替换：匹配+替换*/

    var template = function (text, data) {
        var index = 0;
        var matcher = /<%=([\s\S]+?)%> | <%([\s\S]+?)%>|$/g;//匹配尖括号和百分比号
        var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;//是否包含特殊字符  /n/r/n
        var escapes = {//匹配替代的字符
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        var function_main = " var dataHtml= '';";
        function_main += "dataHtml += ' ";
        //需要替换的字符  普通语法（object【i】.text）特殊语法（for） 截取的位置
        text.replace(matcher, function (match, interpolate, eveluate, offset) {//需要替换的字符  替换之后的语法
            //需要替换的值match
            // 拼接的字符
            // 替换之后的语法interpolate
            // for循环eveluate
            // 返回的位置offset

            // console.log("hi");
            console.log("1"+match);
            console.log("2"+interpolate);
            console.log("3"+eveluate);
            function_main += text.slice(index, offset).replace(escaper, function (match) {
                // console.log(match);
                return "\\" + escapes[match];
            });
            console.log("Gf"+function_main);
            if (eveluate) {
                function_main += "';" + eveluate + "dataHtml += '";
            }
            if (interpolate) {
                function_main += "'+" + interpolate + " +'";
            }
            index = offset + match.length;//叠加位置的索引
          console.log("￥￥￥"+index);

            return match;
        })

        function_main += "'; return dataHtml; ";
        console.log(function_main);
        var render = new Function("obj", function_main);
        // debugger;
        // console.log(data);
        return render(data);
    }
    console.log(template(tem, data));

});