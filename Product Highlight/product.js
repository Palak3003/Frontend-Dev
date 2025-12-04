document.querySelectorAll(".product").forEach(p => {
    p.addEventListener("click", function () {
        this.classList.toggle("highlight");
        if (this.dataset.stock === "0") alert("Product out of stock");
    });

    p.addEventListener("mouseenter", function () {
        this.querySelector(".details").style.display = "block";
    });

    p.addEventListener("mouseleave", function () {
        this.querySelector(".details").style.display = "none";
    });

    p.querySelector(".fav").addEventListener("click", function (e) {
        e.stopPropagation();
        this.classList.toggle("selected");
    });
});
