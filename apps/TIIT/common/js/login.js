/**
 * 
 */
currentPage = {};
currentPage.init = function() {
};

currentPage.loadPage = function(page){
	pagesHistory.push("login.html");
	$("#main").load(page, function(){
		currentPage.init();
	});
};