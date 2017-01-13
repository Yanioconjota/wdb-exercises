var tag = document.getElementById('highlight');
tag.style.background = 'lime';

//Since getElementsByClassName and getElementsByTagName
//returns something that looks like an array
//called a node list but like an array
//we must specify its position
var tags = document.getElementsByClassName('bolded');
tags[0].style.fontWeight = 'bold';

var tags = document.getElementsByTagName("h1");
tags[0].style.color = 'red';

//select by ID
var tag = document.querySelector("#highlight");
tag.style.color = 'black';

//select by Class and returns the first 
//element with the declared class name
var tag = document.querySelector(".bolded");
tag.style.border = '1px solid lime';

var tag = document.querySelector("h1");
tag.style.border = '1px solid red';

//select by tag
var tags = document.querySelectorAll("h1");
tags[1].style.border = '1px solid purple';

var tags = document.querySelectorAll("li");
console.log(tags);

//Since it returns a node list
// a forEach can be used to manipulate
// all selected elements by class
tags.forEach(function(i){
  i.style.fontStyle = 'italic';
});