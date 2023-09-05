const allButtons = document.querySelectorAll("button");
let content = ''; // Initialize content as an empty string

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    content += button.textContent;
    const display = document.getElementById("display");
    if (display) {
      display.value = content;
    }
  });
});

const answerButton = document.getElementById("btn");

answerButton.addEventListener("click", function () {
  if (content) {
    try {
      const result = eval(content); // Evaluate the expression
      const display = document.getElementById("display");
      if (display) {
        display.value = result; // Display the result
      }
      content = ''; // Clear the content after displaying the result
    } catch (error) {
      alert("Invalid expression"); // Handle any evaluation errors
    }
  }
});

const Clear = document.getElementById("Ac");
Clear.addEventListener("click", function(){
    if (content){
      content  = '';
    }
if (display.value = 'Ac'){
  display.value = ''
}
})


const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display) {
    // Remove the last character from the content and update the display
    content = content.slice(0, -1);
    display.value = content;
  }
});

const percentage = document.getElementById("p");
percentage.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display && content) {
    const currentValue = parseFloat(content);
    if (!isNaN(currentValue)) {
      const result = currentValue * (1 / 100);
      content = result.toString();
      display.value = content;
    }
  }
});


const squareRoot = document.getElementById("squareRoot");
squareRoot.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display && content) {
    const currentValue = parseFloat(content);
    if (!isNaN(currentValue) && currentValue >= 0) {
      const result = Math.sqrt(currentValue); // 
      content = result.toString();
      display.value = content;
    } else {
      alert("Invalid input for square root");
    }
  }
});