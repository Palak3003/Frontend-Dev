function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/employees");
    xhr.onload = function () {
        const employees = JSON.parse(xhr.responseText);
        displayEmployees(employees);
    };
    xhr.send();
}

function displayEmployees(data) {
    const container = document.getElementById("employeeList");
    container.innerHTML = "";

    data.forEach(emp => {
        const div = document.createElement("div");
        div.innerHTML = `
            <span>${emp.name}</span>
            <button data-id="${emp.id}" data-status="${emp.status}">
                ${emp.status === "active" ? "Active → Inactive" : "Inactive → Active"}
            </button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", function () {
            toggleStatus(this);
        });
    });
}

function toggleStatus(btn) {
    const id = btn.getAttribute("data-id");
    const current = btn.getAttribute("data-status");
    const updated = current === "active" ? "inactive" : "active";

    btn.innerText = updated === "active" ? "Active → Inactive" : "Inactive → Active";
    btn.setAttribute("data-status", updated);

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `http://localhost:3000/employees/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status !== 200) {
            btn.setAttribute("data-status", current);
            btn.innerText = current === "active" ? "Active → Inactive" : "Inactive → Active";
            document.getElementById("error").innerText = "Failed to update status!";
        }
    };
    xhr.send(JSON.stringify({ status: updated }));
}

loadEmployees();
