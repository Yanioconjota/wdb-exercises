var myArray = [];

function printReverse(myArray){
  for (var i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
  }
}

function isUniform(myArray) {
  var first = myArray[0];
  for(var i = 1; i < myArray.length; i++) {
    if(myArray[i] !== first) {
      return false;
    }
  }
  return true;
}

function sumArray(myArray){
  var total = 0;
  myArray.forEach(function(element){
    total += element;
  });
  return total + " " +"fuck you son, todos putos! JAJAJA!";
}

function maxNumber(myArray){
  var max = myArray[0];
  for (var i = 1; i < myArray.length; i++) {
    if(myArray[i] > max){
      max = myArray[i];
    }
  }
  return max;
};
