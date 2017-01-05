var comments = {};

comments.data = ["Dude!","Lame...","Fuck off!"];

//This exist outside the scope of the object called comments
function print(arr){
	arr.forEach(function(element){
		console.log(element);
	});
}

// In order to pront the data of the comments
//I need to pass it to print as an argument
console.log("This exist outside the scope of the object called comments");
print(comments.data);

//By adding it as a methos of my object
//I use the keyword this to reference the object
//and acces the data which is part of the scope of this object
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

console.log("********************");
console.log("This function is a method inside the object called comments");
comments.print();