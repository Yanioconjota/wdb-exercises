//The count variable is used to make setInterval() stop eventually
var count = 0;
// An example message to show in the console.log
var intervalTxt = 'Surprise motherfucker!';
//This is how we select elements in the DOM
var showInterval = document.getElementById('showInterval');
//The function setInterval is gonna execute
function sayHi(){
  //An html element is created
  intervalElement = document.createElement('li');
  //A text node is created
  intervalMsg = document.createTextNode(intervalTxt);
  //The html element is appended inside the ul
  showInterval.appendChild(intervalElement);
  //The text nodeis appended inside the li
  intervalElement.appendChild(intervalMsg);
  console.log(count);
  console.log(intervalTxt);
  //The count is incremented
  count++;
  //An if statement is used to eventually stop the interval when it reaches five
  if(count >= 5){
    clearInterval(interval);
  }
};
// setInterval(aFunction, interval)
var interval = setInterval(sayHi,1000);
