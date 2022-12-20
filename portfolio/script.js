$(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images img").hover(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});