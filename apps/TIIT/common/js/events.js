/**
 * 
 */
currentPage = {};
currentPage.init = function() {
	$("#header-title").html("Events");
	$("#header").show();
	$('#footer').html('<a href="#" data-role="button" class="ui-block-a" id="add-button"><i class="fa fa-plus" /></a>');
	$("#add-button").button();

	var events = [];
	$('body').removeClass();
	events.push({
		name : "Picnic på Djurårnn"
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