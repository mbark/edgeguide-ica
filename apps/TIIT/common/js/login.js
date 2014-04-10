/**
 * 
 */
currentPage = {};

currentPage.init = function() {
	currentPage.loadPage();
	$('#footer').html('<a href="#" data-role="button" id="login" onclick="currentPage.loadPage(\'events.html\');">Login with facebook</a>');
 	$('#login').button();
}

currentPage.loadPage = function(page){
	pagesHistory.push("login.html");
	$("#main").load(page, function(){
		currentPage.init();
	 });
};

