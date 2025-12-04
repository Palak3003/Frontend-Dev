function showMessage(txt){
    $("#msg").text(txt);
}

$("#sub").on("click", function(){
    showMessage("Notifications enabled");
});

$("#unsub").on("click", function(){
    showMessage("Notifications disabled");
});

$("#add").on("click", function(){
    const t = $("<button class='topic'>Topic</button>");
    $("#topics").append(t);
    t.on("click", function(){ showMessage("Topic clicked"); });
});

$("#remove").on("click", function(){
    $(".topic").off("click").remove();
    showMessage("Topic removed");
});
