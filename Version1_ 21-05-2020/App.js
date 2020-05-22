function swapStyleSheet() {
	var style = document.getElementById('pagestyle');
	var sheet="./styleDark.css";
	if(style.getAttribute('href')==="./styleDark.css")
		sheet="./styleLight.css";

	style.setAttribute('href', sheet);


}

