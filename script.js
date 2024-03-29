document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clear').addEventListener('click', clearDisplay);
  document.getElementById('equal').addEventListener('click', calculate);
  document.getElementById('add').addEventListener('click', function() {
    appendToDisplay('+');
  });
  document.getElementById('subtract').addEventListener('click', function() {
    appendToDisplay('-');
  });
  document.getElementById('modulo').addEventListener('click', function() {
    appendToDisplay('%');
  });
  document.getElementById('mul').addEventListener('click', function() {
    appendToDisplay('*');
  });
  for (let i = 0; i <= 9; i++) {
    document.getElementById(String(i)).addEventListener('click', function() {
      appendToDisplay(String(i));
    });
  }
});

function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var expression = document.getElementById('result').value;
  try {
    var result = eval(expression);
    document.getElementById('result').value = result;
  } catch(error) {
    document.getElementById('result').value = 'Error';
  }
}



  const resultInput = document.getElementById("result");
  
  // Add event listener for input
  resultInput.addEventListener("input", function() {
      const inputValue = resultInput.value;
      
      // Check if the input value is not a number
      if (isNaN(inputValue)) {
          alert("Please enter only numbers.");
          // Clear the input field
          resultInput.value = "";
      }
  });





