/**
 * 
 */
currentPage = {};
currentPage.init = function() {
	var events = [];
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

var fontAwesomeTrashBin = '<i class="fa fa-trash-o">';
function addEventsToList(events) {
	$.each(events, function(i, event) {
		$('#event-list').append(
				'<li data-id="' + event.id + '"data-icon="false"><a href="#" onclick="currentPage.loadPage(\'ingredients.html\',' + event.id + ');">' + event.name + '</a>'
				//+ '<a href="#">' + fontAwesomeTrashBin + '</a>'
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