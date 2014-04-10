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
	
	addBackButton();
};

function addBackButton() {
	var backButton = $('<a></a>')
						.attr('href','#')
						.text('Back')
						.click(goBack);
	var backButtonDiv = $("<div></div>").class('backButtonDiv').append(backButton);
	var title = $("<h2>Ingredients</h2>");
	$("#header").html("").append(backButtonDiv).append(title);
}

function goBack() {
	$("#main").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
}

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		$('#ingredient-list').append(
				'<li><a href="#">' + ingredient.name + '</a>' + '</li>');
	});
	$("#ingredient-list").listview().listview("refresh");
}