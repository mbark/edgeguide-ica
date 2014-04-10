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
	
	addBackButton();
};

function addBackButton() {
	var backButton = $('<a></a>')
						.attr('href','#')
						.text('Back')
						.click(goBack);
	var backButtonDiv = $("<div></div>").class('backButtonDiv').append(backButton);
	var title = $("<h2>Ingredients</h2>");
	var collaboratorsLink = $("<a></a>")
								.attr('href','#')
								.text('Collaborators')
								.click(goToCollaborators);
	var collaboratorsLinkDiv = $("<div></div>").class('collaboratorLinkDiv').append(collaboratorsLink);
	$("#header").html("").append(backButtonDiv).append(title).append(collaboratorsLinkDiv);
}

function goToCollaborators() {
	pagesHistory.push("login.html");
	$("#main").load("collaborators.html", function(){
		currentPage.init();
	});
}

function goBack() {
	$("#main").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
}

function addEventsToList(ingredients) {
	$.each(ingredients, function(i, ingredient) {
		$('#ingredient-list').append(
				'<li data-icon="false"><a href="#">' + ingredient.name + '</a>' + '</li>');
	});
	$("#ingredient-list").listview().listview("refresh");
}