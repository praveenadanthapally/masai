<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L0 - Basic DOM Manipulation</title>
    <style>
        /* Styling for odd and even items */
        .odd {
            font-weight: bold;
            color: blue;
        }
        .even {
            font-style: italic;
            color: red;
        }
    </style>
</head>
<body>

    <h1>DOM Manipulation Task</h1>

    <ul id="itemList">
        <li class="odd">Item 1</li>
        <li class="even">Item 2</li>
        <li class="odd">Item 3</li>
    </ul>

    <button id="addBtn">Add Item</button>

    <script>
        const ul = document.querySelector("#itemList");
        const button = document.querySelector("#addBtn");

        button.addEventListener("click", function () {
            const newItem = document.createElement("li");

            // Determine new list item's number
            const itemCount = ul.children.length + 1;
            newItem.textContent = "New Item " + itemCount;

            // Apply style based on odd or even position
            if (itemCount % 2 === 1) {
                newItem.classList.add("odd");
            } else {
                newItem.classList.add("even");
            }

            // Add to ul
            ul.appendChild(newItem);
        });
    </script>

</body>
</html>
