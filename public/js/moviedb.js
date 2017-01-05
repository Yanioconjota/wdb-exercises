// Create an array of movie objects. Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out something that looks like:

// You have seen "Magnificent 7" - 3.5 Stars
// You have seen "Inclredible Beasts and where to find them" - 3.5 Stars
// You have seen "Rogue One" - 4 Stars
// You have not seen "Intruder" - 0 Stars

var movieDb = [
	{
		title : "Magnificent 7",
		hasWatched : true,
		rating : "3.5"
	},
	{
		title : "Inclredible Beasts and where to find them",
		hasWatched : true,
		rating : "3.5"
	},
	{
		title : "Rogue One",
		hasWatched : true,
		rating : "4"
	},
	{
		title : "Intruder",
		hasWatched : false,
		rating : "0"
	}
]

console.log("Iterating through array using for");

for (var i = 0; i < movieDb.length; i++) {
	var results = "You have";
	if (movieDb[i].hasWatched) {
		results += "seen";
	}
	else {
		results += "not seen";
	}
	results += " " + "\"" + movieDb[i].title + "\" - ";
	results  += movieDb[i].rating + "stars";
	console.log(results);
}

console.log("**********************************************");

console.log("Iterating through array using forEach");

function buildString(movie){
	var results = "You have ";
	if (movie.hasWatched) {
		results += "seen";
	}
	else {
		results += "not seen";
	}
	results += " " + "\"" + movie.title + "\" - ";
	results  += movie.rating + "stars";
	console.log(results);
}

movieDb.forEach(function(movie){
	buildString(movie);
});