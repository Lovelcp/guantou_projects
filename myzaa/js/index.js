$(document).on("click", "#index-tab a", function () {
    // tab 下划线逻辑
    $("#index-tab a").css("border-bottom", "");
    $(this).css("border-bottom", "2px solid black");


    // tab 切换逻辑
    content_hide();
    var this_id = $(this).attr('id');
    console.log(this_id);
    switch (this_id) {
        case "about-us-tab":
            $("#about-us").show();
            break;
        case "weixin-tab":
            $("#weixin").show();
            break;
        case "store-tab":
            $("#store").show();
            break;
        default:
            break;
    }

});

function content_hide() {
    $("#main-content div").hide();
}
