const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', ()=>{
		document.body.classList.remove('nav-open');
	});
});





let mode;
mode = localStorage.getItem('mode');

//check on DOMload

window.addEventListener('DOMContentLoaded', ()=>{
	
	if (mode === 'light'){
    	lightMode();
	}else{
	    darkMode();
	}
	
});


//functions called from html


//for checkbox display only
function checkBox(){
	var checkBox = document.getElementById('dark-mode__toggle');
	if (mode === 'light'){
    	checkBox.checked = false;
	}else{
	    checkBox.checked = true;
	}
}

//for CSS swap
function swapSheet(){
	var checkBox = document.getElementById('dark-mode__toggle');
	if (mode === 'light'){
    	darkMode();
		checkBox.checked = true;
	}else{
	   lightMode();
	   checkBox.checked = false;
	}
	window.scrollTo(0, 0);
}


function lightMode(){
	var style = document.getElementById('pagestyle');
	var logo = document.getElementById('logo');	

	var sheet="./styleLight.css";
	var logoNew="http://localhost:3000/img/logo.png";
	
	logo.setAttribute('src', logoNew);
	style.setAttribute('href', sheet);
	

	localStorage.setItem('mode', 'light');
    mode = localStorage.getItem('mode');
}

function darkMode(){
	var style = document.getElementById('pagestyle');
	var logo = document.getElementById('logo');

	var sheet="./styleDark.css";
	var logoNew="http://localhost:3000/img/logoDark.png";
	
	logo.setAttribute('src', logoNew);
	style.setAttribute('href', sheet);


	localStorage.setItem('mode', 'dark');
    mode = localStorage.getItem('mode');
}


//scroll to top

topBtn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

