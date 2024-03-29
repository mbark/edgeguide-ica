var pagesHistory = [];
var currentPage = {};

function wlCommonInit(){

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	WL.Client.connect({
		onSuccess: onConnectSuccess,
		onFailure: onConnectFailure
	});
	
	$('#main').load('login.html', function() {
		currentPage.init();
	});
	
}

function setBackButton() {
	var backButton = $('<a></a>')
						.attr('href','#')
						.html('<i class="fa fa-caret-left"></i>')
						.click(goBack);
	$("#header-back-button").html(backButton).addClass('active');
}

function removeBackButton() {
	$("#header-back-button").html("").removeClass('active');
}

function removeNextButton() {
	$("#header-next-button").html("").removeClass('active');
}

function goBack() {
	$("#main").load(pagesHistory.pop(), function(){
		removeBackButton();
		removeNextButton();
		currentPage.init();
	});
}

function onConnectSuccess() {
	
}

function onConnectFailure(response) {
	console.log(response);
}



