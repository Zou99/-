/**
 * Created by Administrator on 2018/12/17 0017.
 */
$(function() {

  $("#zzq_shop_guanli").click(function(){
    $(".zzq_clr_list_ne").slideToggle(300);
    $(".zzq_shop_guli,.zzq_shop_ok").toggle(300);
  })


  $(".zzq_shop_lef").click(function() {
    $(".zzq_shp_car_check").toggleClass("zzq_sh_chek_col");
    $(".zzq_sho_fig_fix").toggle();

  })

  // 复选框的选择单独的框时候的点击事件
$(".zzq_car_checking").click(function(){
    $(this).toggleClass("zzq_sh_chek_col");
    $(this).parents('.aui-list').siblings().find('.zzq_car_checking').toggleClass("zzq_sh_chek_col");
})


  $("#search-input").on('keyup focus', function() {

      // 若输入框有文本才会显示列表
      var text = this.value.trim()
      if (text) {
          $(".zzq_histor").show();
          $('.zzq_sec_lis_new').hide();
      }
  }).blur(function() {
    
      $(".zzq_histor").hide();
      $('.zzq_sec_lis_new').show();
  })

    var slide = new auiSlide({
        container: document.getElementById("aui-slide"),
        // "width":300,
        "height": 180,
        "speed": 300,
        "autoPlay": 3000,
        "pageShow": true,
        "pageStyle": 'dot',
        "loop": true,
        'dotPosition': 'center',
        currentPage: currentFun
    })

    function currentFun(index) {}

    // 购物车页面的按钮加减按钮
    $('.zzq_car_btn_r').click(function() {
        // 定义库存变量
        var stock = 20;
        var test = $(this.parentNode).find(".zzq_car_btn_num").get(0);
        // console.log(test.get(0).innerText)
        if(test.innerText<stock){
          test.innerText = (test.innerText)*1+1;
        }
        // $(".zzq_car_btn_num").html(parseInt($(".zzq_car_btn_num").html()) + 1);
        // if ($(".zzq_car_btn_num").html() > 1) {
        //     $('.aui-icon-minus').show();
        // } else {
        //     $('.aui-icon-minus').hide();
        // }
        // var i = $(".Price_tit").html();
        // var n = $(".zzq_car_btn_num").html();
        // $(".Price_foot").html(i * n);
    });
    $(".zzq_car_btn_l").click(function() {
        var test = $(this.parentNode).find(".zzq_car_btn_num").get(0);
        // console.log(test.get(0).innerText)
        if(test.innerText>1){
          test.innerText = (test.innerText)*1-1;
        }
        // $(".zzq_car_btn_num").html(parseInt($(".zzq_car_btn_num").html()) - 1);
        // if ($(".zzq_car_btn_num").html() == 1) {
        //     $('.aui-icon-minus').hide();
        // } else {
        //     $('.aui-icon-minus').show();
        // }
        // var i = $(".Price_tit").html();
        // var n = $(".add_num").html();
        // $(".Price_foot").html(i * n);
    });


});
