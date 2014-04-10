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
						.click(goBack);
	var headerContent = backButton;
	$("#header").html(headerContent);
}

function goBack() {
	
}

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		$('#ingredient-list').append(
				'<li><a href="#">' + ingredient.name + '</a>' + '</li>');
	});
	$("#ingredient-list").listview().listview("refresh");
}