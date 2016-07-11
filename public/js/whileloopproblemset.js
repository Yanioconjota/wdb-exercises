$(document).ready(function(){

  // 1 - Print all numbers between -10 and 19

  var num = -10,
      numResults = document.getElementById('num-results'),
      numResultsMsg;

  while(num >= -10 && num <= 19){
    numResultsTxt = document.createElement('li');
    numResultsMsg = document.createTextNode(num);
    numResults.appendChild(numResultsTxt);
    numResultsTxt.appendChild(numResultsMsg);
    console.log(num);
    num++;
  }

  // 2 - Print all even numbers between 10 and 40

  var evenNum = 10,
      evenNumResults = document.getElementById('even-num-results'),
      evenNumResultsMsg;

  while(evenNum >= 10 && evenNum <= 40) {
    if((evenNum % 2) == 0){
      evenNumResultsTxt = document.createElement('li');
      evenNumResultsMsg = document.createTextNode(evenNum);
      evenNumResults.appendChild(evenNumResultsTxt);
      evenNumResultsTxt.appendChild(evenNumResultsMsg);
      console.log(evenNum);
    } evenNum++;
  }

  // 3 - Print all odd numbers between 300 and 333

  var oddNum = 300,
  oddNumResults = document.getElementById('odd-num-results'),
  oddNumResultsMsg;

  while(oddNum >= 300 && oddNum <= 333) {
    if(oddNum % 2){
      oddNumResultsTxt = document.createElement('li');
      oddNumResultsMsg = document.createTextNode(oddNum);
      oddNumResults.appendChild(oddNumResultsTxt);
      oddNumResultsTxt.appendChild(oddNumResultsMsg);
      console.log(oddNum);
    } oddNum++;
  }

  // 4 - Print all numbers divisible 5 AND 3 between 5 and 50

  var divNum = 5,
      divNumResults = document.getElementById('div-num-results'),
      divNumResultsMsg;

  while(divNum >= 5 && divNum <= 50) {
    if((divNum % 3) == 0){
      divNumResultsTxt = document.createElement('li');
      divNumResultsMsg = document.createTextNode(divNum + " " + "is divisible by 3");
      divNumResults.appendChild(divNumResultsTxt);
      divNumResultsTxt.appendChild(divNumResultsMsg);
      console.log(divNum + " " + "is divisible by 3");
    } else if ((divNum % 5) == 0) {
      divNumResultsTxt = document.createElement('li');
      divNumResultsMsg = document.createTextNode(divNum + " " + "is divisible by 5");
      divNumResults.appendChild(divNumResultsTxt);
      divNumResultsTxt.appendChild(divNumResultsMsg);
      console.log(divNum + " " + "is divisible by 5");
    } divNum++;
  }
});
