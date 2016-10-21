var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input != "quit") {
  //handle input
  if (input === "list") {
    todos.forEach(function(todo, i){
      console.log(i + ': '+todo);
    });
  } else if (input === "new") {
    //ask for a new todo
    var newTodo = prompt("Enter new todo");
    //adds todo to the array
    todos.push(newTodo);
  }
  //asks again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");
