// Select all buttons
const allButtons = document.querySelectorAll('button');

// Select display element
const display = document.getElementById('display');

// Select answer button
const answerButton = document.getElementById('btn');

// Select clear button
const Clear = document.getElementById('Ac');

// Initialize content variable
let content = '';

// Add event listener to all buttons
allButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    content += button.textContent;
    if (display) {
      display.value = content;
    }
  });
});

// Add event listener to answer button
answerButton.addEventListener('click', function () {
  try {
    const result = eval(content);
    display.value = result;
  } catch {
    alert('Invalid expression');
  }
});

// Add event listener to clear button
Clear.addEventListener('click', function () {
  if (content) {
    content = '';
  }
  if ((display.value = 'Ac')) {
    display.value = '';
  }
});

// Select delete button
const deleteBtn = document.getElementById('delete');

// Add event listener to delete button
deleteBtn.addEventListener('click', function () {
  const display = document.getElementById('display');
  if (display) {
    content = content.slice(0, -1);
    display.value = content;
  }
});

// Select percentage button
const percentage = document.getElementById('p');

// Add event listener to percentage button
percentage.addEventListener('click', function () {
  const display = document.getElementById('display');
  if (display && content) {
    const currentValue = parseFloat(content);
    if (!isNaN(currentValue)) {
      const result = currentValue * (1 / 100);
      content = result.toString();
      display.value = content;
    }
  }
});

// Select square root button
const squareRoot = document.getElementById('squareRoot');

// Add event listener to square root button
squareRoot.addEventListener('click', function () {
  const currentValue = parseFloat(content);
  if (!isNaN(currentValue) && currentValue >= 0) {
    const result = Math.sqrt(currentValue);
    content = result.toString();
    display.value = content;
  } else {
    alert('Invalid input for square root');
  }
});

// Add event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  var myElement = document.getElementById("Desktop1");
  var colorButton = document.getElementById("change");
  var randomColors = ["rgb(52, 152, 219)", "rgb(169, 79, 83)"];
  
  var isInitialColor = true; 
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
