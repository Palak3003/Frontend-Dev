document.getElementById("register").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    axios.get("http://localhost:3000/users?email=" + email)
    .then(res => {
        if (res.data.length > 0) {
            document.getElementById("msg").innerText = "Email already registered.";
        } else {
            axios.post("http://localhost:3000/users", { email, name })
            .then(() => {
                document.getElementById("msg").innerText = "Registration successful.";
            });
        }
    });
});
