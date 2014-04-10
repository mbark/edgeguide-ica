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
		name : "Picnic på Djurgårn",
		id : 0
	});
	events.push({
		name : "Studs event",
		id : 1
	});

	addEventsToList(events);
};

var fontAwesomeTrashBin = '<i class="fa fa-trash-o delete-event-icon">';
function addEventsToList(events) {
	$.each(events, function(i, event) {
		$('#event-list').append(
				'<li data-icon="false"><a href="#" onclick="currentPage.loadPage(\'ingredients.html\',' + event.id + ');">' + event.name + '</a>'
				+ '</li>');
	});
	$("#event-list").listview();
}

var eventId;
currentPage.loadPage = function(page, id){
	pagesHistory.push("events.html");
	eventId = id;
	$("#main").load(page, function(){
		currentPage.init();
		console.log(eventId);
	 });
};
