/**
 * 
 */
currentPage = {};

currentPage.init = function() {
	currentPage.loadPage();
	$('#footer').html('<a href="#" data-role="button" class="ui-block-a" id="login-button" onclick="currentPage.loadPage(\'events.html\');"><i class="fa fa-facebook" /> Login with Facebook</a>');
 	$('#login-button').button();
 	$('body').addClass('login-screen');
}

currentPage.loadPage = function(page){
	pagesHistory.push("login.html");
	$("#main").load(page, function(){
		currentPage.init();
	 });
};

