$(document).ready(function () {

    $("#searchBox").on("keyup", function () {
        let query = $(this).val().trim();

        $("#loading").show();

        $.ajax({
            url: "/products",
            type: "GET",
            data: { q: query },
            success: function (products) {
                $("#loading").hide();

                $("#results").empty();

                if (products.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                products.forEach(p => {
                    $("#results").append(`
                        <div class="item">
                            <img src="${p.image}" width="60">
                            <h4>${p.name}</h4>
                            <p>₹${p.price}</p>
                        </div>
                        <hr>
                    `);
                });
            }
        });
    });

});
