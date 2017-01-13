//Selects body tag
var body = document.querySelector('body');
//We set our flag to false, wich means we're initializing our variable
var isBlue = false;

//Then we manipulate the DOM through setInterval wich takes two arguments, a function and time in ms
setInterval(function(){
  if (isBlue) {
    body.style.background = 'rebeccapurple';
  } else {
    body.style.background = 'slateblue';
  }
  //Sets is blue to true
  isBlue = !isBlue;
},2500);