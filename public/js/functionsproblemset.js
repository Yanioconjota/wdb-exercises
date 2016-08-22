
function isEven(num){
  // if(num % 2 === 0){
  //   return true;
  // } else {
  //   return false;
  // }
  return num % 2 === 0;
};

function factorial(num){
  if(num === 0){
    return 1
  }
  return num * factorial(num - 1);
};

function factorialAsc(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
    result *= i;
  }
  //return the result variable
  return result;

  // if(num === 0){
  //   return 1
  // }
  // return num * factorial(num - 1);
};

function factorialDes(num){
  if(num === 0){
    return 1;
  }
  //define a resul variable
  var result = num;
  //calculate factorial and store value in result
  for(var i = num-1; i >= 1; i--){
    result *= i;
  }
  //return the result variable
  return result;
};


function kebabToSnake(str){
  var kebab = str;
  var snake = kebab.replace(/-/g,'_');
  return snake;
};
