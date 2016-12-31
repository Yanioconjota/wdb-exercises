// Create an array of movie objects. Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out something that looks like:

// You have seen "Magnificent 7" - 3.5 Stars
// You have seen "Inclredible Beasts and where to find them" - 3.5 Stars
// You have seen "Rogue One" - 4 Stars
// You have not seen "Intruder" - 0 Stars

var movieDb = [
	{
		name : "Magnificent 7",
		hasWatched : "seen",
		rating : "3.5"
	},
	{
		name : "Inclredible Beasts and where to find them",
		hasWatched : "seen",
		rating : "3.5"
	},
	{
		name : "Rogue One",
		hasWatched : "seen",
		rating : "4"
	},
	{
		name : "Intruder",
		hasWatched : "not seen",
		rating : "0"
	}
]

console.log("Iterating through array using for");

for (var i = 0; i < movieDb.length; i++) {
	console.log("You have" + " " + movieDb[i].hasWatched + " " + movieDb[i].name + " - " + movieDb[i].rating + " " + "Stars");
}

console.log("**********************************************");

console.log("Iterating through array using forEach");

movieDb.forEach(function(movies){
	console.log("You have" + " " + movies.hasWatched + " " + movies.name + " - " + movies.rating + " " + "Stars");
});