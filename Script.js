<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: linear-gradient(to bottom, #ffcc00, #ff9900);
      text-align: center;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Age Calculator</h1>
  <p>Enter your birth year: <input type="text" id="birthYear"></p>
  <button onclick="calculateAge()">Calculate Age</button>

  <script>
    function calculateAge() {
      var birthYear = document.getElementById("birthYear").value;
      var currentYear = new Date().getFullYear();
      var age = currentYear - birthYear;
      var result = "Your age is: " + age;

      // Open a new window to display the age
      var newWindow = window.open("", "", "width=300,height=200");
      newWindow.document.write("<p>" + result + "</p>");

      // Add a button for a new game
      newWindow.document.write("<button onclick='startNewGame()'>Start New Game</button>");
    }

    function startNewGame() {
      alert("New game started!");
    }
  </script>
</body>
</html>
