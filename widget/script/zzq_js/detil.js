$(document).ready(function() { //在文档加载完毕后执行
    $(window).scroll(function() { //开始监听滚动条
        var topp = $(document).scrollTop();
        if (topp > 40) {
            // alert(123123);
            $("#aui-header").fadeIn();
            $(".zzq_li_frm_he").hide();

        } else {
            $("#aui-header").fadeOut();
            $(".zzq_li_frm_he").show();
        }

    })

    $(".zzq_de_frm_head_cent").click(function() {
        $(".zzq_detai_hea_nwe").toggle();
    })

    // 加入购物车
    $(".aui-bg-danger,.aui-bg-warning").click(function(){
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

})
