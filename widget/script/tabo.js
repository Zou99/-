/**
 * Created by Administrator on 2018/12/17 0017.
 */
$(function() {
    /*---------------购物车页面反选全选效果--------------------*/
    // 当商品选中状态改变时调用该函数计算商品总价格
    function countMoney(){
        var goodsNode = $(".dqf_zzq_shop_goods")
        var counts = 0;
        var len = 0;
        var price;
        var nums;
        for(var i=0;i<goodsNode.length;i++){
            if((goodsNode.eq(i).is(":checked"))){
                price = goodsNode.eq(i).parent().siblings('.aui-list-item-inner').find('.dqf_zzq_price').text();
                nums = goodsNode.eq(i).parent().siblings('.aui-list-item-inner').find('.zzq_car_btn_num').text();
                counts += price*nums;
                len++; 
            }
        }
        $(".zzq_dqf_counts").text(counts.toFixed(2));
        $(".zzq_dqf_zz").text(len);
    }
    // 判断购物车中商品是否全部选中，是则给全选按钮添加样式
    function isAllSelect(){
        var allGoods = $(".zzq_car_checking");

        var num4 = 0;
        for(var i=0;i<allGoods.length;i++){
            if((allGoods.eq(i).is(":checked"))){
                num4++;
            }
        }
        // console.log(num4);
        // console.log(allGoods.length);
        
        // for(var i=0;i<allGoods.length;i++){
        //     console.log(allGoods.get(i));
        // }
        if(num4==allGoods.length){
            $(".zzq_chenk_all").prop("checked",true)
            $(".zzq_chenk_all").addClass("zzq_sh_chek_col");
        }else{
            $(".zzq_chenk_all").prop("checked",false)
            $(".zzq_chenk_all").removeClass("zzq_sh_chek_col");
        }
    }
    // 判断店铺中商品是否全部选中，是则给店铺全选按钮添加样式
    function isShopAllSelect(dom_this){
        var parentCkbox = $(dom_this).parents('.aui-list').siblings().find(".dqf_zzq_shop");
        var nodeSib = $(dom_this).parents('.aui-list').siblings().find(".dqf_zzq_shop_goods");
        // console.log(nodeSib.get(0))
        // console.log(dom_this)
        var num3 = 0;
        for(var i=0;i<nodeSib.length;i++){
            if((nodeSib.eq(i).is(":checked"))){
                num3++;
            }
        }
        if($(dom_this).is(":checked")){
            num3++;
        }
        // console.log(num3);
        if(num3==nodeSib.length+1){
            parentCkbox.prop("checked",true)
            parentCkbox.addClass("zzq_sh_chek_col");
        }else{
            parentCkbox.prop("checked",false)
            parentCkbox.removeClass("zzq_sh_chek_col");
        }
    }
    // 店铺全选按钮点击触发的方法
    $(".dqf_zzq_shop").click(function(){
        var shopDie = $(this).parents('.aui-list').siblings().find('.dqf_zzq_shop_goods');
        var num2 = 0;
        for(var i=0;i<shopDie.length;i++){
            if((shopDie.eq(i).is(":checked"))){
                num2++;
            }
        }
        if(num2 == shopDie.length){
            for(var i=0;i<shopDie.length;i++){
                shopDie.eq(i).prop("checked",false)
                shopDie.eq(i).removeClass("zzq_sh_chek_col")
                $(this).removeClass("zzq_sh_chek_col")
            }
        }else{
            for(var i=0;i<shopDie.length;i++){
                shopDie.eq(i).prop("checked",true)
                shopDie.eq(i).addClass("zzq_sh_chek_col")
                $(this).addClass("zzq_sh_chek_col")
            }
        }
        isAllSelect();
        countMoney();
    });
    $(".zzq_chenk_all").click(function(){
        var ckbox = $(".zzq_car_checking");
        // var num = $(":checked").length;
        var num = 0;
        for(var i=0;i<ckbox.length;i++){
            if((ckbox.eq(i).is(":checked"))){
                num++;
            }
        }
        if(num == ckbox.length){
            for(var i=0;i<ckbox.length;i++){
                ckbox.eq(i).prop("checked",false)
                ckbox.eq(i).removeClass("zzq_sh_chek_col")
                $(this).removeClass("zzq_sh_chek_col")
            }
        }else{
            for(var i=0;i<ckbox.length;i++){
                ckbox.eq(i).prop("checked",true)
                ckbox.eq(i).addClass("zzq_sh_chek_col")
                $(this).addClass("zzq_sh_chek_col")
            }
        }
        countMoney();
    })
    $("#zzq_shop_guanli").click(function() {
        $(".zzq_clr_list_ne").slideToggle(300);
        $(".zzq_shop_guli,.zzq_shop_ok").toggle(300);
    })


    // $(".zzq_shop_lef").click(function() {
    //   $(".zzq_shp_car_check").toggleClass("zzq_sh_chek_col");
    //   $(".zzq_sho_fig_fix").toggle();
    //
    // })


    // 复选框的选择单独的框时候的点击事件
    $(".dqf_zzq_shop_goods").click(function(){
        $(this).toggleClass("zzq_sh_chek_col");
        isShopAllSelect(this);
        isAllSelect();
        countMoney();
    });



/*------------------------购物车页面反选全选结尾处--------------------------*/ 

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
        var stock = 20;
        var test = $(this.parentNode).find(".zzq_car_btn_num").get(0);
        // console.log(test.get(0).innerText)
        if (test.innerText < stock) {
            test.innerText = (test.innerText) * 1 + 1;
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
        countMoney();
    });
    $(".zzq_car_btn_l").click(function() {
        var test = $(this.parentNode).find(".zzq_car_btn_num").get(0);
        // console.log(test.get(0).innerText)
        if (test.innerText > 1) {
            test.innerText = (test.innerText) * 1 - 1;
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
        countMoney();
    });


});
