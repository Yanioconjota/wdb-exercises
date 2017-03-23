var button = document.getElementsByTagName("button");
var body   = document.getElementsByTagName("body");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click',function(){
    this.classList.toggle("big-button-alt");
    for (var i = 0; i < body.length; i++) {
      body[i].classList.toggle("bg-aqua");
    }
  });
}

// or
//
// var button   = document.querySelector("button");
// var isPurple = false;
//
// button.addEventListener('click',function(){
//   if (isPurple) {
//     document.body.classList.add("bg-aqua");
//     button.classList.add("big-button-alt");
//   } else {
//     document.body.classList.remove("bg-aqua");
//     button.classList.remove("big-button-alt");
//   }
//   isPurple = !isPurple;
// });
