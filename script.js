let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let dateInput = document.getElementById("dateInput");
    let timeInput = document.getElementById("timeInput");

    let taskText = taskInput.value.trim();
    let taskDate = dateInput.value;
    let taskTime = timeInput.value;

    if (taskText === "") return;

    let task = {
        text: taskText,
        date: taskDate,
        time: taskTime,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";

    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <div class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </div>
            <div>${task.date} ${task.time}</div>

            <div class="actions">
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    let newTask = prompt("Edit task:", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask;
        renderTasks();
    }
}