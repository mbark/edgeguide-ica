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
	
	setBackButton();
};

function addCollaboratorsToList(collaborators) {
	$.each(collaborators, function(i, collaborator) {
		$('#collaborator-list').append(
				'<li><a href="#">' + collaborator.name + '</a>' + '</li>');
	});
	$("#collaborator-list").listview().listview("refresh");
}

