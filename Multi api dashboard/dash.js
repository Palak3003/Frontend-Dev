document.getElementById("loading").style.display = "block";

Promise.all([
    fetch("http://localhost:3000/users").then(r => r.json()),
    fetch("http://localhost:3000/orders").then(r => r.json()),
    fetch("http://localhost:3000/products").then(r => r.json())
]).then(([u, o, p]) => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("users").innerText = "Total users: " + u.length;
    document.getElementById("orders").innerText = "Total orders: " + o.length;
    document.getElementById("products").innerText = "Total products: " + p.length;
}).catch(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("warning").innerText = "Some data could not be loaded.";
});
