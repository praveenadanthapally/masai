<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L2 - Dynamic To-Do List</title>

    <style>
        body {
            font-family: Arial;
            margin: 20px;
        }

        #taskInput {
            padding: 8px;
            width: 250px;
        }

        #addBtn {
            padding: 8px 12px;
            margin-left: 5px;
            cursor: pointer;
        }

        ul {
            margin-top: 20px;
            padding-left: 0;
            list-style: none;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f4f4f4;
            padding: 10px;
            margin-bottom: 8px;
            border-radius: 5px;
        }

        .completed {
            text-decoration: line-through;
            color: grey;
        }

        button {
            padding: 5px 8px;
            margin-left: 6px;
            cursor: pointer;
        }

        .deleteBtn {
            background-color: red;
            color: white;
            border: none;
        }

        .completeBtn {
            background-color: green;
            color: white;
            border: none;
        }
    </style>
</head>
<body>

    <h2>Dynamic To-Do List</h2>

    <input id="taskInput" type="text" placeholder="Enter a new task">
    <button id="addBtn">Add Task</button>

    <ul id="taskList"></ul>

    <script>
        const taskInput = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");

        // Add task on button click
        addBtn.addEventListener("click", function () {
            const taskText = taskInput.value.trim();

            // Prevent adding empty tasks
            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            // Create <li>
            const li = document.createElement("li");

            // Create text span
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;

            // Create Complete button
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete";
            completeBtn.classList.add("completeBtn");

            // Create Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("deleteBtn");

            // Add event listener for complete
            completeBtn.addEventListener("click", function () {
                taskSpan.classList.toggle("completed");
            });

            // Add event listener for delete
            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            // Append elements
            li.appendChild(taskSpan);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);

            // Clear input field
            taskInput.value = "";
        });
    </script>

</body>
</html>
