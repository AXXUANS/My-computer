$(function () {
    // $.ajax({
    //     async : true,
    //     url : "http://api.douban.com/v2/movie/new_movies",
    //     type : "GET",
    //     dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
    //     jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
    //     jsonpCallback: 'handleResponse', //设置回调函数名
    //     data : {
    //         q : "javascript",
    //         count : 1
    //     },
    //     success: function(response, status, xhr){
    //         // console.log('状态为：' + status + ',状态是：' + xhr.statusText);
    //         console.log(response);
    //
    //     }
    // });
    var str="";
    $.ajax({
        async : true,
        url : "http://api.douban.com/v2/movie/us_box",
        type : "GET",
        dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
        jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
        jsonpCallback: 'handleResponse', //设置回调函数名
        data : {
            q : "javascript",
            count : 1
        },
        success: function(response, status, xhr){
            console.log('状态为：' + status + ',状态是：' + xhr.statusText);
            console.log(response);
            // console.log(response.subjects.length);
            for(var i=0;i<response.subjects.length;i++){
                console.log(response.subjects[i].subject.images.medium);
                console.log(response.subjects[i].subject.title);
                str +="<li>\n" +
                    "        <div class=\"am-gallery-item\">\n" +
                    "            <a href=\"\" class=\"\">\n" +
                    "                <img class=\"am-img-responsive\"  style='height: 260px;width:463px;' src=\""+response.subjects[i].subject.images.small+"\"  alt=\"终会走过这条遥远的道路\"/>\n" +
                    "                <h3 class=\"am-gallery-title\">"+response.subjects[i].subject.title +"</h3>\n" +
                    "                <div class=\"am-gallery-desc\">2375-09-26</div>\n" +
                    "            </a>\n" +
                    "        </div>\n" +
                    "    </li>";
            }
           var b=$(".am-gallery").append(str);
            // $.parser.parse(b);  EasyUI 基础插件 - Parser 解析器
            // $(".am-gallery").listview("refresh");
            // $.parser.parse(b)
            // 解决样式不生效
            $(".am-gallery").trigger("create");
        }
    });
});