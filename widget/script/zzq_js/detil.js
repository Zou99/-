$(document).ready(function() { //在文档加载完毕后执行
    $(window).scroll(function() { //开始监听滚动条
        var topp = $(document).scrollTop();
        if (topp >= 40) {
            // alert(123123);
            $("#aui-header").fadeIn();
            $(".zzq_li_frm_he").hide();
            $(".zzq_detai_hea_news_fg").hide();
        } else {
            $("#aui-header").fadeOut();
            $(".zzq_li_frm_he").show();
        }

    })

    //商品详情页导航栏按钮弹框，暂不知还有什么别的用法暂留
    // $(".zzq_de_frm_head_cent").click(function() {
    //   alert(568)
    //     $(".zzq_detai_hea_nwe").toggle();
    // })
    //留存导航栏三个点按钮点击后弹框的样子
    $(".zzq_li_frm_he").click(function() {
        $(".zzq_detai_hea_news_fg").slideDown(300);
    });
    $(".zzq_detail_news_icon").click(function() {
        $(".zzq_detai_hea_news_fg").slideUp(300);
    })

    // 加入购物车
    $(".aui-bg-danger,.aui-bg-warning").click(function() {
        $(".zzq_spec_shop").show();
        $("html,body").css({
            'height': '100%',
            'overflow': 'hidden'
        });
    })

    // 关闭加入购物车的页面
    $(".zzq_detail_danger_cuo2,.zzq_detail_spec_rgba2").click(function() {
        $(".zzq_spec_shop").hide();
        $("html,body").css({
            'height': '',
            'overflow': 'inherit'
        });
    })

    // 商品详情页面规格点击出现的样式
    $(".zzq_sear_lis_a").click(function() {
        $(this).css({
            "background-color": "#fef9f6",
            "border": "1px solid #f35000",
            "color": "#f35000"
        })
        $(this).parent().siblings().find('a').css({
            'background-color': '#f5f5f5',
            'color': '#000',
            'border': '0px'
        })
    })

    // 加入购物车效果
    $(".zzq_dit_btn_foot_left").click(function() {
            alert('已添加成功');
        })
})
