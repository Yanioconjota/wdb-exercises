$(document).ready(function(){
  var dayCalculator = prompt("Hello there loser! How old are you?"),
      userResults = document.querySelector("#user-results"),
      calculateDays = dayCalculator * 365,
      strForMessage = "You've been" + " " + calculateDays + " " + "days" + " ",
      message;

  if(dayCalculator > 18){
    message = document.createTextNode(strForMessage + "being a doushebag");
  } else {
    message = document.createTextNode(strForMessage + "being a little jerk");
  }

  var textNode = document.createElement("h2");
  textNode.appendChild(message);
  userResults.appendChild(textNode);

});
