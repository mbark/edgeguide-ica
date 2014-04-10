/**
 * 
 */
currentPage = {};
currentPage.init = function() {
	alert('login');
};

currentPage.loadPage = function(page){
	pagesHistory.push("login.html");
	$("#main").load(page, function(){
		currentPage.init();
	});
};