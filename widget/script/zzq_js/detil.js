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

    // 商品详情页面规格点击出现的样式
    $(".zzq_sear_lis_a").click(function() {
      $(this).css({
        "background-color":"#fef9f6",
        "border":"1px solid #f35000",
        "color":"#f35000"
      })
      $(this).parent().siblings().find('a').css({
        'background-color':'#f5f5f5',
        'color':'#000',
        'border':'0px'
      })
    })

    // 加入购物车效果
    $(".zzq_dit_btn_foot_left").click(function(){
      alert('已添加成功');
      $(".zzq_shop_main").append(
        ' <div class="zzq_shop_main">'+
            <div class="aui-list" style="background-image:none;">
                <div class="aui-list-item">
                    <div class="aui-list-item-inner">
                        <div class="aui-row">
                            <div class="aui-col-xs-2">
                                <input class="zzq_shp_car_check zzq_car_checking" type="checkbox" name="demo1" checked="">
                            </div>
                            <div class="aui-col-xs-10">
                                <div class="zzq_shopp_head_dian">
                                    <i class="iconfont icon-shangpu" style="color:#c9c9c9;"></i><span class="zzq_shopp_tras">艾诗尼耶旗舰店</span><i class="iconfont icon-icon-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="aui-list-item-label">
                        <div class="zzq_shop_quan">
                            领券
                        </div>
                    </div>
                </div>
            </div>
            <!-- 订单中的商品的样 -->
            <div class="aui-list" style="background-image:none;">
                <div class="aui-list-item">
                    <div class="aui-list-item-label" style="width:10%;">
                        <input class="zzq_shp_car_check zzq_car_checking" type="checkbox" name="demo1" checked="">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="zzq_shpo_img_left">
                            <img src="../image/list/wu.jpg" alt="">
                        </div>
                        <div class="zzq_shop_left_list">
                            <p>
                                包邮抖音同款七龙珠周边动漫底座悟空手办7颗神龙水晶龙球礼物
                            </p>
                            <div class="zzq_shop_rig_list">
                                七颗全套（黄色）4.3CM;龙珠立牌+王者戒指+王者钱包+明王
                            </div>
                            <div class="aui-row" style="padding-top:5px;">
                                <div class="aui-col-xs-6 zzq_shop_xx">
                                    <span>￥</span><span>168.82</span>
                                </div>
                                <div class="aui-col-xs-6" style="margin-top:5px;">
                                    <div class="zzq_car_btn_l">
                                        <i class="iconfont icon-jian"></i>
                                    </div>
                                    <div class="zzq_car_btn_c">
                                      <span class="zzq_car_btn_num">1</span>
                                    </div>
                                    <div class="zzq_car_btn_r">
                                      <i class="iconfont icon-jia"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
    })

})
