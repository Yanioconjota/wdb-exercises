
function isEven(n){
  if(n % 2 === 0){
    return true;
  }
};

function factorial(f){
  if(f === 0){
    return 1
  }
  return f * factorial(f - 1);
};

function kebabToSnake(s){
  var kebab = s;
  var snake = kebab.replace('-','_');
  return snake;
};
