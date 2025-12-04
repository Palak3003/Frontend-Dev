$(".manager").click(function(){
    $(this).find(".team").toggle();
});

$(".manager .emp").hover(function(){
    $(this).next().css("color","blue");
});

$(".department h3").click(function(){
    $(this).parent().children(".emp").css("background","yellow");
});

$(".star").click(function(){
    $(this).parents(".department").find(".emp").css("font-weight","bold");
});

$(".department").dblclick(function(){
    $(this).find(".emp").hide();
});
