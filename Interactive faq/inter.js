const questions = document.querySelectorAll(".question");

questions.forEach(q => {
    q.addEventListener("click", function () {
        const ans = this.nextElementSibling;
        ans.style.display = ans.style.display === "none" ? "block" : "none";
        alert("Answer toggled");
    });

    q.addEventListener("dblclick", function () {
        document.querySelectorAll(".answer").forEach(a => a.style.display = "none");
    });

    q.addEventListener("mouseenter", function () {
        this.innerText = "Hovered: " + this.innerText;
    });
});

const search = document.getElementById("faqSearch");

search.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
});

search.addEventListener("blur", function () {
    this.parentElement.classList.remove("focused");
});
