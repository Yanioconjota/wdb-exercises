$(document).ready(function(){
  var firstName = prompt("Hello there! Would you kindly input your first name?");
  var lastName = prompt("Now that we are ther, please input your last name");
  var age = prompt("Are you old enough to be here? If it is so, type me your age");
  var domName = $("#user-results").find("li:nth-of-type(1)");
  var domAge = $("#user-results").find("li:nth-of-type(2)");

  //alert("Welcome " + firstName + " " + lastName + " " + "You're lucky to be here");
  //alert("I guess being" + " " + age + " " + "is quite enough to enter here");

  console.log("Welcome " + firstName + " " + lastName + " " + "You're lucky to be here");
  console.log("I guess being" + " " + age + " " + "is quite enough to enter here");

  if (age > 18){
    domAge.append("I guess being" + " " + age + " " + "is quite enough to enter here");
  } else {
    domAge.append("Get the f*ck out of my site!!!");
  }

  if(firstName === "Janio" && lastName === "Isacura"){
    domName.append("Welcome my master");
  } else {
    domName.append("Welcome " + firstName + " " + lastName + " " + "You're lucky to be here");
  }

  var userNameNode = document.createElement("LI");
  var textName = document.createTextNode("Your name is" + " " + firstName + " " + lastName);
  userNameNode.appendChild(textName);
  document.getElementById("user-results").appendChild(userNameNode);

  var userAgeNode = document.createElement("LI");
  var textAge = document.createTextNode("Your age is" + " " + age);
  userAgeNode.appendChild(textAge);
  document.getElementById("user-results").appendChild(userAgeNode);

});
