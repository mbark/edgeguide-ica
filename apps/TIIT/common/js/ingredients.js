/**
 * 
 */
var map= {
    '0': [],
    '1': [],
    '2': [],
    '3': []
    };
	map['0'].push({
		name :"Fanta"
	});
	map['0'].push({
		name :"Rose"
		});
	map['0'].push({
		name :"Jordgubbar"
		});

	
	map['1'].push({
		name :"Latte"
		});

	map['1'].push({
		name :"Latte"
		});

currentPage = {};
currentPage.init = function() {
//	var ingredients = [];
//	ingredients.push({
//		name : "Blomkål"
//	});
//	ingredients.push({
//		name : "Saftsoppa"
//	});
//	
	addEventsToList(map["" + eventId]);
};

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		$('#ingredient-list').append(
				'<li><a href="#">' + ingredient.name + '</a>' + '</li>');
	});
	$("#ingredient-list").listview().listview("refresh");
}