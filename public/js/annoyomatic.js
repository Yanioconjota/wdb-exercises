$(document).ready(function(){
  var answer = prompt('Are we there yet?');

  while(answer != 'yes' && answer != 'yeah'){
    var answer = prompt('Are we there yet?');
  }

  // while (answer.indexOf('yes') === -1) {
  //   var answer = prompt('Are we there yet?');
  // }
  alert('We made it, and not because of you!');
});