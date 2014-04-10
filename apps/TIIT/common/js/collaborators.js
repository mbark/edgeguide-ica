currentPage = {};
currentPage.init = function() {
	var collaborators= [];
	collaborators.push({
		name : "Jonas Sköld",
		image: "images/jonas.png"
	});
	collaborators.push({
		name : "Martin Barksten",
		image: "images/martin.png"
	});
	collaborators.push({
		name : "Nils Dahlbom Norgren",
		image: "images/nils.png"
	});
	collaborators.push({
		name : "Per Classon",
		image: "images/per.png"
	});
	
	addCollaboratorsToList(collaborators);
	
	setBackButton();
};

function addCollaboratorsToList(collaborators) {
	$.each(collaborators, function(i, collaborator) {
		$('#collaborator-list').append(
				'<li data-icon="false"><div class="face-pic"><img src="' + collaborator.image + '" /></div><a href="#">' + collaborator.name + '</a>' + '<i class="fa fa-facebook" /></li>');
	});
	$("#collaborator-list").listview().listview("refresh");
}

