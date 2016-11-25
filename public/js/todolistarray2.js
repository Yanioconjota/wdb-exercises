var todos = [];

var input = prompt("What would you like to do?");

loadTodos();

while (input !== "quit") {
  //handle input
  if(input === "list"){
    listTodos();
    console.log("******************");
  } else if (input === "new") {
    addTodo();
    saveTodos();
  } else if (input === "delete") {
    deleteTodo();
  }
  //ask for new input
  var input = prompt("What would you like to do?");
}

console.log("Ok you just quit the app");

function listTodos(){
  // todo is just a placeholder representing every item in the array
  // i represents the index of that item
  // that console log is nothing but decoration
  todos.forEach(function(todo, i){
    //console.log(todos);
    console.log("******************");
    console.log(i + ": " + todo);
  });
}

function addTodo(){
  //ask for a new to-do
  var newToDo = prompt("Enter new to-do");
  //add to-do to the array
  todos.push(newToDo);

  // saveTodos()
  console.log("Added " + newToDo);
}

function saveTodos() {
  // We stringify the array to save it in localStorage
  // We save it using the key we get from the previous object
  var data = JSON.stringify(todos);
  localStorage.setItem('saveTodo',data);
}

function loadTodos() {

  //It retrieves the key from localStorage
  // Transforms the string into an object
  // It saves it in todos variable
  var data = localStorage.getItem('saveTodo');

  if (data !== null) {

    todos = JSON.parse(data);

  }



}

function deleteTodo(){
  // asks for index of to-do to be deleted
  var index = prompt("Enter index of to-do to delete");
  // delete that to-do using spice
  // splice methos takes 2 arguments the index of the array and the amount of items to delete
  todos.splice(index,1);
  console.log("Deleted to-do " + index);
}
