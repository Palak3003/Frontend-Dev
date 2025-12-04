function loadTimetable(day) {
    fetch("http://localhost:3000/timetable?day=" + day)
    .then(r => r.json())
    .then(data => {
        const box = document.getElementById("timetable");
        box.innerHTML = "";
        if (data.length === 0) {
            box.innerText = "No classes today.";
            return;
        }
        data.forEach(c => {
            box.innerHTML += `
                <div>
                    <p>${c.subject}</p>
                    <p>${c.faculty}</p>
                    <p>${c.time}</p>
                </div><hr>
            `;
        });
    });
}

document.getElementById("day").addEventListener("change", function(){
    loadTimetable(this.value);
});

loadTimetable("Monday");
