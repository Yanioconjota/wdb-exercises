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

  domName.append("Welcome " + firstName + " " + lastName + " " + "You're lucky to be here");
  domAge.append("I guess being" + " " + age + " " + "is quite enough to enter here");

});
