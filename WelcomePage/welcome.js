function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning!";
    if (h < 18) return "Good Afternoon!";
    return "Good Evening!";
}

const greet = document.getElementById("greet");
greet.innerText = getGreeting();

document.getElementById("change").addEventListener("click", function () {
    greet.innerText = "Stay positive. Work hard. Achieve!";
    alert("Greeting changed");
});

document.getElementById("toggle").addEventListener("click", function () {
    greet.style.display = greet.style.display === "none" ? "block" : "none";
});
