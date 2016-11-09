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

function sumArray(myArray){
  for(var i = 0; i < myArray.length - 1; i++) {
    var sum = i + (i+1);
  }
  console.log(sum);
}

function maxNumber( MyArray ){
  return Math.max.apply( null, MyArray );
};
