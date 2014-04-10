currentPage = {};
currentPage.init = function() {
	var collaborators= [];
	collaborators.push({
		name : "Jonas Sköld"
	});
	collaborators.push({
		name : "Martin Barksten"
	});
	collaborators.push({
		name : "Nils Dahlbom Norgren"
	});
	collaborators.push({
		name : "Per Classon"
	});
	
	addCollaboratorsToList(collaborators);
	
	addBackButton();
};

function addBackButton() {
	var backButton = $('<a></a>')
						.attr('href','#')
						.text('Back')
						.click(goBack);
	var backButtonDiv = $("<div></div>").class('backButtonDiv').append(backButton);
	var title = $("<h2>Collaborators</h2>");
	$("#header").html("").append(backButtonDiv).append(title);
}

function goBack() {
	$("#main").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
}

function addCollaboratorsToList(collaborators) {
	$.each(collaborators, function(i, collaborator) {
		$('#collaborator-list').append(
				'<li><a href="#">' + collaborator.name + '</a>' + '</li>');
	});
	$("#collaborator-list").listview().listview("refresh");
}

