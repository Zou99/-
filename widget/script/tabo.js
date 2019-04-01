/**
 * Created by Administrator on 2018/12/17 0017.
 */
$(function() {


  $(".zzq_shop_lef").click(function() {
    //   $(".zzq_shp_car_check::after").css('content'," ");
    // $(".zzq_shp_car_check::before").css('content'," ");
    $(".zzq_shp_car_check").toggleClass("zzq_sh_chek_col");
    $(".zzq_sho_fig_fix").toggle();
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




});
