<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L1 - Interactive DOM Manipulation</title>

    <style>
        #myBox {
            width: 300px;
            height: 150px;
            background-color: lightgrey;
            padding: 20px;
            margin-top: 20px;
            font-size: 18px;
            border-radius: 10px;
        }

        input, button {
            margin: 8px 0;
            padding: 8px;
            font-size: 16px;
        }

        button {
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h2>Interactive DOM Manipulation</h2>

    <!-- Input for color -->
    <label>Enter Background Color:</label><br>
    <input type="text" id="colorInput" placeholder="e.g., red, blue, green"><br>

    <!-- Input for text -->
    <label>Enter Text to Update:</label><br>
    <input type="text" id="textInput" placeholder="Type new content"><br>

    <!-- Buttons -->
    <button id="bgBtn">Change Background</button>
    <button id="textBtn">Update Text</button>

    <!-- Div Box -->
    <div id="myBox">This is the initial text in the box.</div>

    <!-- JavaScript -->
    <script>
        // Select elements
        const colorInput = document.getElementById("colorInput");
        const textInput = document.getElementById("textInput");
        const bgButton = document.getElementById("bgBtn");
        const textButton = document.getElementById("textBtn");
        const box = document.getElementById("myBox");

        // Function to validate if color exists
        function isValidColor(color) {
            const s = new Option().style;
            s.color = color;
            return s.color !== ""; // If browser recognizes it, color is valid
        }

        // Change background color
        bgButton.addEventListener("click", function () {
            const userColor = colorInput.value.trim();

            if (isValidColor(userColor)) {
                box.style.backgroundColor = userColor;
            } else {
                alert("Invalid color name!");
            }
        });

        // Update text inside the div
        textButton.addEventListener("click", function () {
            const userText = textInput.value.trim();

            if (userText === "") {
                alert("Please enter some text!");
            } else {
                box.textContent = userText;
            }
        });
    </script>

</body>
</html>
