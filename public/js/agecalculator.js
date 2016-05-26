$(document).ready(function(){
  var dayCalculator = prompt("Hello there loser! How old are you?");
  var userResults = document.querySelector("#user-results");

  var calculateDays = dayCalculator * 365;

  if(dayCalculator > 18){
    var message = document.createTextNode("You've been" + " " + calculateDays + " " + "days" + " " + "being a doushebag");
  } else {
    var message = document.createTextNode("You've been" + " " + calculateDays + " " + "days" + " " + "being a little jerk");
  }

  var textNode = document.createElement("h2");
  textNode.appendChild(message);
  userResults.appendChild(textNode);

});
