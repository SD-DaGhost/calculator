// Select
const allButtons = document.querySelectorAll('button')
// Display
const display = document.getElementById('display')
// Button
const answerButton = document.getElementById('btn')
// Clear
const Clear = document.getElementById('Ac')

// Initialize
let content = ''

// Event
allButtons.forEach(function (button) {
  // Click
  button.addEventListener('click', function () {
    // Content
    content += button.textContent
    // Check
    if (display) {
      // Value
      display.value = content
    }
  })
})

// Event
answerButton.addEventListener('click', function () {
  // Try
  try {
    // Result
    const result = eval(content) 
    // Display
    display.value = result 
  } catch {
    // Alert
    alert('Invalid expression') 
  }
})

// Event
Clear.addEventListener('click', function () {
  // Check
  if (content) {
    // Reset
    content = ''
  }
  // Check
  if ((display.value = 'Ac')) {
    // Clear
    display.value = ''
  }
})

// Delete
const deleteBtn = document.getElementById('delete')
// Event
deleteBtn.addEventListener('click', function () {
  // Display
  const display = document.getElementById('display')
  // Check
  if (display) {
    // Update
    content = content.slice(0, -1)
    // Value
    display.value = content
  }
})

// Percentage
const percentage = document.getElementById('p')
// Event
percentage.addEventListener('click', function () {
  // Display
  const display = document.getElementById('display')
  // Check 
  if (display && content) {
    // Parse 
    const currentValue = parseFloat(content)
    // Check 
    if (!isNaN(currentValue)) {
      // Calculate 
      const result = currentValue * (1 / 100)
      // Convert 
      content = result.toString()
      // Display 
      display.value = content
    }
  }
})

// SquareRoot 
const squareRoot = document.getElementById('squareRoot')
// Event 
squareRoot.addEventListener('click', function () {
  // Parse 
  const currentValue = parseFloat(content) 
  // Check 
  if (!isNaN(currentValue) && currentValue >= 0) {
    // Calculate 
    const result = Math.sqrt(currentValue)
    // Convert 
    content = result.toString()
    // Display 
    display.value = content
  } else {
    // Alert 
    alert('Invalid input for square root')
  }
})

// EventListener 
document.addEventListener("DOMContentLoaded", function () {
  // Element 
  var myElement = document.getElementById("Desktop1");
  // Button 
  var colorButton = document.getElementById("change");
  // Colors 
  var randomColors = ["rgb(52, 152, 219)", "rgb(169, 79, 83)"];
  
  // Flag 
  var isInitialColor = true; 

  // Color 
  var initialColor = myElement.style.background;

   function toggleBackgroundColor() {
     if (isInitialColor) {
       const randomIndex = Math.floor(Math.random() * randomColors.length);
       const randomColor = randomColors[randomIndex];
       myElement.style.background = randomColor;
     } else {
       myElement.style.background = initialColor;
     }
    
     isInitialColor = !isInitialColor;
   }

   colorButton.addEventListener("click", toggleBackgroundColor);
});
