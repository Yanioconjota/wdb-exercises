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

// // string we're looping over
// var str = "hello",
// //first character is at index 0
//     count = 0;
//
// while(count < str.length){
//   console.log(str[count]);
//   count++;
// }
//Infine loop example
// var count = 0;
//
// while (count < 10) {
//   console.log(count);
// }
