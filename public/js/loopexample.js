$(document).ready(function(){
  var str = prompt("Enter your name"),
      count = 0,
      userResults = document.getElementById("user-results"),
      message;

  while(count < str.length){
    var textNode = document.createElement("li");
    message = document.createTextNode(str[count]);
    console.log(str[count]);
    textNode.appendChild(message);
    userResults.appendChild(textNode);
    count++;
  }
});
