$(document).ready(function(){

  // 1 - Print all numbers between -10 and 19

  for (var num = -10; num >= -10 && num <= 19; num++;){
    numResultsTxt = document.createElement('li');
    numResultsMsg = document.createTextNode(num);
    numResults.appendChild(numResultsTxt);
    numResultsTxt.appendChild(numResultsMsg);
    console.log(num);
  }

  // 2 - Print all even numbers between 10 and 40


  for(var evenNum = 10; evenNum >= 10 && evenNum <= 40; evenNum++;){
    var evenNumResults = document.getElementById('even-num-results'),
        evenNumResultsMsg;

    if((evenNum % 2) == 0){
      evenNumResultsTxt = document.createElement('li');
      evenNumResultsMsg = document.createTextNode(evenNum);
      evenNumResults.appendChild(evenNumResultsTxt);
      evenNumResultsTxt.appendChild(evenNumResultsMsg);
      console.log(evenNum);
    }
  }

  // 3 - Print all odd numbers between 300 and 333

  for(var oddNum = 300; oddNum >= 300 && oddNum <= 333; oddNum++ ){
    var oddNumResults = document.getElementById('odd-num-results'),
        oddNumResultsMsg;
    if(oddNum % 2){
      oddNumResultsTxt = document.createElement('li');
      oddNumResultsMsg = document.createTextNode(oddNum);
      oddNumResults.appendChild(oddNumResultsTxt);
      oddNumResultsTxt.appendChild(oddNumResultsMsg);
      console.log(oddNum);
    }
  }

  // 4 - Print all numbers divisible 5 AND 3 between 5 and 50

  for(var divNum = 5; divNum >= 5 && divNum <= 50; divNum++){
    var divNumResults = document.getElementById('div-num-results'),
        divNumResultsMsg;
    if(divNum % 3 == 0 && divNum % 5 == 0){
      divNumResultsTxt = document.createElement('li');
      divNumResultsMsg = document.createTextNode(divNum);
      divNumResults.appendChild(divNumResultsTxt);
      divNumResultsTxt.appendChild(divNumResultsMsg);
      console.log(divNum);
    }
  }
});
