
var tab = new auiTab({
    element: document.getElementById("tab"),

}, function(ret) {
    if (ret) {
        //定义获取对象的所有兄弟节点的函数，
        function siblings(elm) {
            var a = [];
            var p = elm.parentNode.children;
            for (var i = 0, pl = p.length; i < pl; i++) {
                if (p[i] !== elm) a.push(p[i]);
            }
            return a;
        }
        var index = ret.index;
        var activeC = document.getElementById("tab1-con" + index);
        activeC.className = "";
        for (var i = 0; i < siblings(activeC).length; i++) {
            siblings(activeC)[i].className = "aui-hide";
        }
    }
});

//留存导航栏三个点按钮点击后弹框的样子
$(".zzq_list_rig").click(function() {
    $(".zzq_detai_hea_news_fg").slideDown(300);
});
$(".zzq_list_hed_guanbi").click(function() {
    $(".zzq_detai_hea_news_fg").slideUp(300);
    $(".zzq_detai_hea_news_fg").find('.aui-list').css('background-color','#615c59');
})

// 列表页面点击正倒序变换
    $(".zzq_list_pos").click(function () {
        $(this).find('span').toggle();
        $(".icon-zhengxu").toggleClass('icon-ziyuan');
    })
