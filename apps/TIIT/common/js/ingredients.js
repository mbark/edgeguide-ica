/**
 * 
 */
currentPage = {};
currentPage.init = function() {
	var ingredients = [];
	ingredients.push({
		name : "Blomkål"
	});
	ingredients.push({
		name : "Saftsoppa"
	});
	
	addEventsToList(ingredients);
};

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		console.log("Adding ingredient to list " + ingredient);
		$('#ingredient-list').append('<li><a href="#">' + ingredient.name + '</a>' + '</li>');
	});
	$("#ingredient-list").listview("refresh");
}