/**
 * 
 */
currentPage = {};
currentPage.init = function() {
	var events = [];
	events.push({
		name : "Picnic på Djurgårn"
	});
	events.push({
		name : "Studs event"
	});
	
	addEventsToList(events);
};

function addEventsToList(events) {
	$.each(events, function(i, event) {
		console.log("Adding event to list " + event);
		$('#event-list').append('<li><a href="#">' + event.name + '</a>' + '</li>');
	});
	$("#event-list").listview("refresh");
}