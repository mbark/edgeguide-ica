/**
 * 
 */
currentPage = {};

currentPage.init = function() {
	currentPage.loadPage();
	$('#footer').html('<a href="#" data-role="button" data-role="none" data-corner="false" class="ui-block-a" id="login-button" onclick="currentPage.loadPage(\'events.html\');">Login with facebook</a>');
 	$('#login-button').button();
}

currentPage.loadPage = function(page){
	pagesHistory.push("login.html");
	$("#main").load(page, function(){
		currentPage.init();
	 });
};

