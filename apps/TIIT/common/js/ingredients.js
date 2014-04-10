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
	$("#header-title").html("Ingredients");
	addEventsToList(map["" + eventId]);
	
	setBackButton();
	setCollaboratorButton();
};

function setCollaboratorButton(){
	var collaboratorsLink = $("<a></a>")
						.attr('href','#')
						.text('Collaborators')
						.click(goToCollaborators);
	$("#header-next-button").html(collaboratorsLink);
}

function goToCollaborators() {
	pagesHistory.push("ingredients.html");
	$("#main").load("collaborators.html", function(){
		removeBackButton();
		removeNextButton();
		currentPage.init();
	});
}

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		$('#ingredient-list').append(
				'<li data-icon="false">' + '<i class="fa fa-circle-o " /><a href="#"><div class="inner">' + ingredient.name + '</div></a><i class="fa fa-trash-o" /></li>');
	});
	$("#ingredient-list").listview().listview("refresh");
}