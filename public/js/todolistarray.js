var todos = ["buy some nachos"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  //handle input
  if(input === "list"){
    console.log(todos);
  } else if (input === "new") {
    //ask for a new to-do
    var newToDo = prompt("Enter new to-do");
    //add to-do to the array
    todos.push(newToDo);
  }
  //ask for new input
  var input = prompt("What would you like to do?");
}

console.log("Ok you just quit the app");
