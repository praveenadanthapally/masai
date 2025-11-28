<!DOCTYPE html>
<html>
<head>
  <title>L0 - Creating & Removing Elements</title>
</head>
<body>

  <h2>Creating and Removing Elements</h2>

  <button id="addBtn">Add Paragraph</button>
  <button id="removeBtn">Remove Last Paragraph</button>

  <div id="container"></div>

  <script>
    const container = document.getElementById("container");

    document.getElementById("addBtn").addEventListener("click", function () {
      const para = document.createElement("p");
      para.textContent = "This is a new paragraph.";
      container.appendChild(para);
    });

    document.getElementById("removeBtn").addEventListener("click", function () {
      if (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    });
  </script>

</body>
</html>
