;(function() {

var $codeSnippets 		= document.querySelectorAll('.code-content'),
	entityMapObject 	= { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;' };


function init() {
	buildSnippets();
}

function escapeHtml(string) {
	console.log("aaa");
	return String(string).replace(/[&<>"'\/]/g, function(s) {
		return entityMapObject[s];
	});
}

function buildSnippets() {
	for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML);
}

init();

}());