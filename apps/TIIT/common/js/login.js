/**
 * 
 */
currentPage = {};

currentPage.init = function() {
	currentPage.loadPage();
}

currentPage.loadPage = function(page){
	console.log('hej');
	$('#footer').html('<a href="#" data-role="button" id="login" onclick="currentPage.loadPage(\'events.html\');">Login with facebook</a>');
	$('#login').button();

};

