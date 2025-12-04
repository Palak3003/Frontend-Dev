function loadTasks(filter="") {
    let params = {};

    if (filter === "low") params.priority = "low";
    if (filter === "medium") params.priority = "medium";
    if (filter === "high") params.priority = "high";
    if (filter === "completed") params.completed = true;

    $.ajax({
        url: "http://localhost:3000/tasks",
        type: "GET",
        data: params,
        success: function(data) {
            $("#tasks").empty();
            data.forEach(t => {
                $("#tasks").append(`
                    <div>
                        <input type="checkbox" data-id="${t.id}" ${t.completed?"checked":""}>
                        <span>${t.title} (${t.priority})</span>
                    </div>
                `);
            });

            $("input[type='checkbox']").on("change", function(){
                let id = $(this).data("id");
                let completed = $(this).is(":checked");

                $.ajax({
                    url: `http://localhost:3000/tasks/${id}`,
                    type: "PATCH",
                    contentType: "application/json",
                    data: JSON.stringify({ completed })
                });
            });
        }
    });
}

$("#filter").on("change", function() {
    loadTasks($(this).val());
});

loadTasks();
