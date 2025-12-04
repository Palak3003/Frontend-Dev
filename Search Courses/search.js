$("#search").on("keyup", function(){
    const q = $(this).val().toLowerCase();
    $("#courseList li").each(function(){
        const text = $(this).text();
        const match = text.toLowerCase().includes(q);

        $(this).toggle(match);

        if (match && q) {
            const highlighted = text.replace(new RegExp(q,"gi"), m => `<span style="background:yellow">${m}</span>`);
            $(this).html(highlighted);
        } else {
            $(this).text(text);
        }
    });
});

$("#clear").click(function(){
    $("#search").val("");
    $("#courseList li").show().each(function(){
        $(this).text($(this).text());
    });
});
