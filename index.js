const allButtons = document.querySelectorAll('button')
const display = document.getElementById('display')
const answerButton = document.getElementById('btn')
const Clear = document.getElementById('Ac')
let content = '' // Initialize content as an empty string

allButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    content += button.textContent
    if (display) {
      display.value = content
    }
  })
})

answerButton.addEventListener('click', function () {
  try {
    const result = eval(content) // Evaluate the expression
    display.value = result // Display the result
  } catch {
    alert('Invalid expression') // Handle any evaluation errors
  }
})


Clear.addEventListener('click', function () {
  if (content) {
    content = ''
  }
  if ((display.value = 'Ac')) {
    display.value = ''
  }
})

const deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function () {
  const display = document.getElementById('display')
  if (display) {
    // Remove the last character from the content and update the display
    content = content.slice(0, -1)
    display.value = content
  }
})

const percentage = document.getElementById('p')
percentage.addEventListener('click', function () {
  const display = document.getElementById('display')
  if (display && content) {
    const currentValue = parseFloat(content)
    if (!isNaN(currentValue)) {
      const result = currentValue * (1 / 100)
      content = result.toString()
      display.value = content
    }
  }
})
const squareRoot = document.getElementById('squareRoot')
squareRoot.addEventListener('click', function () {
  const currentValue = parseFloat(content) // Parse content as a float
  if (!isNaN(currentValue) && currentValue >= 0) {
    const result = Math.sqrt(currentValue)
    content = result.toString()
    display.value = content
  } else {
    alert('Invalid input for square root')
  }
})
});


// y
document.addEventListener("DOMContentLoaded", function () {
  var myElement = document.getElementById("Desktop1");
  var colorButton = document.getElementById("change");
  var randomColors = ["rgb(52, 152, 219)", "rgb(169, 79, 83)"];
  var isInitialColor = true; // Flag to track the current state

  // Store the initial color
  var initialColor = myElement.style.background;

  function toggleBackgroundColor() {
    if (isInitialColor) {
      const randomIndex = Math.floor(Math.random() * randomColors.length);
      const randomColor = randomColors[randomIndex];
      myElement.style.background = randomColor;
    } else {
      myElement.style.background = initialColor;
    }
    
    // Toggle the state flag
    isInitialColor = !isInitialColor;
  }

  colorButton.addEventListener("click", toggleBackgroundColor);
});

