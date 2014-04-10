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
		$('#event-list').append(
				'<li><a href="#">' + event.name + '</a>' + '</li>');
	});
	$("#event-list").listview().listview("refresh");
}