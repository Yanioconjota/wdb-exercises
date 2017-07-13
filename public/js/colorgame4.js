//6 is the amount of squares
var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click',function(){
  //generate all new colors
  colors = generateRandomColors(6)
  //pick a random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  h1.style.backgroundColor = "#232323";
  resetButton.textContent = "New colors"
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener('click',function(){
    //grab color clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  });

  function changeColors(color){
    // loop through all the squares
    for (var i = 0; i < squares.length; i++) {
      //change each color to match given color
      squares[i].style.backgroundColor = color;
    }
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //the array takes num which is the argument with the amount of squares
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  //return a string with random rgb colors
  return "rgb(" + r + ", " + g + ", " + b +")";
}
