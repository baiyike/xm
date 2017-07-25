var anniu = $(".listNav .list_item_box ul li label>input");
$("#btn1").click(function () {
    for(var i=0;i<anniu.length;i++){
        anniu[i].checked = true;
    }
});
$("#btn2").click(function () {
    for(var i=0;i<anniu.length;i++){
        anniu[i].checked = !anniu[i].checked;
    }
});
$("#btn3").click(function () {
    for(var i=0;i<anniu.length;i++){
        anniu[i].checked = false;
    }
});
/*加active*/
Tab2($("#shipin li"),$(".videoTabLeft"),"click");
Tab2($("#cai li"),$("#tabsTab>div"),"click");
Tab2($("#dudu li"),$("#dushu_toggle>.tabs_item"),"click");
Tab2($("#keji li"),$("#keji_toggle>.tabs_item"),"click");
Tab2($("#ti li"),$("#comTitle_tabsToggleTab>.tabs"),"click");
Tab2($("#jin a"),$("#tabsToggle>div"),"click");
Tab2($("#yv li"),$("#comTitle_tabs_yele_toggle>.tabs_item"),"click");
Tab2($("#car li"),$("#comTitle_tabs_car_toggle>.tabs_item"),"click");
Tab2($("#cai1 li"),$("#comTitle_tabs_caijing_toggle>.tabs_item"),"click");
Tab2($("#woai li"),$("#comTitle_tabs_kantu_toggle>.tabs_item"),"click");
Tab2($("#yx span"),$("#game_toggle>.tabs_item"),"click");
Tab2($("#sj li"),$("#shouji_toggle>.tabs_item"),"click");
Tab2($("#caca span"),$("#yingyong_toggle>.tabs_item"),"click");
function Tab2(tabElement,toggleElement,event){
    tabElement.bind(event,function () {
        tabElement.removeClass("active");
        toggleElement.hide();
        var index = $(this).index();
        $(this).addClass("active");
        toggleElement.eq(index).show();
    });
}
/* 猜你喜欢 */
var index = 0;
$("#cainixihuanTabLeft").click(function(){
    $(".c_list_scroll .comList").hide();
    $("#cainixihuanTabBtn").children().eq(index).removeClass("active");
    index--;
    if(index<=0){
        index = 0;
    }
    $("#cainixihuanTabBtn").children().eq(index).addClass("active");
    $(".c_list_scroll .comList").eq(index).show();
});
$("#cainixihuanTabRight").click(function(){
    $(".c_list_scroll .comList").hide();
    $("#cainixihuanTabBtn").children().eq(index).removeClass("active");
    index++;
    if(index>=4){
        index = 4;
    }
    $("#cainixihuanTabBtn").children().eq(index).addClass("active");
    $(".c_list_scroll .comList").eq(index).show();
});
fn($("#boke"),"click");
fn($("#dan1"),"click");
fn($("#kehu"),"click");
fn($("#wode"),"click");
function fn(element,event) {
    var flag = true;
    element.bind(event,function () {

        if(flag == true){
            $(this).next().stop().slideDown();
            flag = !flag;
        }else {
            $(this).next().stop().slideUp();
            flag = !flag;
        }
    });
}
$(".logoWarp .scarchBox .searchTxt").click(function () {
    $(".logoWarp .scarchBox .list").css("z-index","2").slideDown();
});
$(".logoWarp .scarchBox .list li").click(function () {

    $(".logoWarp .scarchBox .searchTxt").html($(this).html());
    $(".logoWarp .scarchBox .list").hide();
});