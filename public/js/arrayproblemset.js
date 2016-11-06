var myArray = [];

function printReverse(myArray){
  myArray.reverse();
  myArray.forEach(function(item){
    console.log(item);
  });
}

function isUniform(myArray) {
  for(var i = 0; i < myArray.length - 1; i++) {
    if(myArray[i] !== myArray[i+1]) {
      return false;
    }
  }
  return true;
}
