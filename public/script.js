function parallax() {
	var $slider = document.getElementById("hero");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;
	
	var coords = '0% '+ yPos + 'px';
	
	$slider.style.backgroundPosition = coords;

	// var $slider = document.getElementById("elephants");

	// var yPos = window.pageYOffset / $slider.dataset.speed;
	// yPos = -yPos;
	
	// var coords = '0% '+ yPos + 'px';
	
	// $slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});
