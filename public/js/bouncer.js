$(document).ready(function(){
  var userAge = prompt("Stop right there loser! How old are you?"),
      userResults = document.querySelector("#user-results"),
      textNode = document.createElement("h2"),
      message;

   if( userAge <= 0 || userAge == -0 ){
    message = document.createTextNode("Fuck off! You don't even exist!");
    textNode.style.color = "#FF225C";
    textNode.appendChild(message);
    userResults.appendChild(textNode);
    alert("Fuck off! You don't even exist!");

  } else if( userAge < 18 ){
      message = document.createTextNode("Get lost you asswipe!");
      textNode.appendChild(message);
      userResults.appendChild(textNode);
      alert("Get lost you asswipe!");

  } else if ( userAge >= 21 ) {
      message = document.createTextNode("You may enter peasant");
      textNode.appendChild(message);
      userResults.appendChild(textNode);

  } if ( userAge % 2 !== 0) {
    message = document.createTextNode(" Your age is odd! Dah!");
    textNode.appendChild(message);
    userResults.appendChild(textNode);

  } if(Math.sqrt(userAge) % 1 === 0){
    message = document.createTextNode("Your age is a perfect square! Not that I care asswipe...");
    textNode.appendChild(message);
    userResults.appendChild(textNode);
  }



});
