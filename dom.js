<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            padding: 15px;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <!-- h1 with id -->
    <h1 id="main-heading">Original Heading</h1>

    <!-- Some paragraphs -->
    <p>This is paragraph 1.</p>
    <p>This is paragraph 2.</p>
    <p>This is paragraph 3.</p>

    <!-- div with class container -->
    <div class="container">
        This is the container div.
    </div>

    <script>
        // 1. Select <h1> by id and change text
        const heading = document.getElementById("main-heading");
        heading.textContent = "Welcome to the DOM World!";

        // 2. Select all <p> elements and change text color to blue
        const paragraphs = document.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "blue";
        }

        // 3. Select first div with class 'container' using querySelector
        const containerDiv = document.querySelector(".container");
        containerDiv.style.backgroundColor = "yellow";
    </script>

</body>
</html>
