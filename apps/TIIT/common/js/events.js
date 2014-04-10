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

var fontAwesomeTrashBin = '<i class="fa fa-trash-o delete-event-icon">';
function addEventsToList(events) {
	$.each(events, function(i, event) {
		$('#event-list').append(
				'<li data-icon="false"><a href="#">' + event.name
						+ fontAwesomeTrashBin + '</a>' + '</li>');
	});
	$("#event-list").listview();
}