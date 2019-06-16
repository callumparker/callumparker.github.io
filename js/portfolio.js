var bodyEl = document.getElementsByTagName("BODY")[0];
var colors = ['#637BAA', '#C67069'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = random_color;
var popupWindow = document.getElementsByClassName("popupWindow");

function openPopup(projectName){
	window.scrollTo(0, 0);
	addClass(bodyEl, 'stopScroll');
	document.getElementById(projectName).style.visibility = "visible";
	stopVideo();
	random_color = colors[Math.floor(Math.random() * colors.length)];
	
	for (var i = 0; i < popupWindow.length; i++) {
		popupWindow[i].style.backgroundColor = random_color;
	}
}

function closePopup(){
	hideAll("popupBackground");
	stopVideo();
	removeClass(bodyEl, 'stopScroll');
}

function hideAll(elName){
	var x = document.getElementsByClassName(elName);
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "hidden";
	}
}

function stopVideo() {
	var x = document.getElementsByClassName("projectVideo");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}