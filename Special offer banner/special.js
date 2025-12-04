$("#hide").click(function(){ $("#banner").hide(); });
$("#show").click(function(){ $("#banner").show(); });
$("#toggle").click(function(){ $("#banner").slideToggle(); });

let fadeState = false;
$("#fade").click(function(){
    fadeState ? $("#banner").fadeIn() : $("#banner").fadeOut();
    fadeState = !fadeState;
});

setInterval(() => {
    $("#banner").fadeOut(500).fadeIn(500);
}, 5000);
