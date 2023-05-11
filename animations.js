document.addEventListener("DOMContentLoaded", function() {
	const fadeIns = document.querySelectorAll(".fade-in");
	const slideIns = document.querySelectorAll(".slide-in");
  
	// Add class to trigger animations when scrolled into view
	function handleAnimation() {
	  fadeIns.forEach(fadeIn => {
		const fadeInPosition = fadeIn.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.3;
  
		if (fadeInPosition < screenPosition) {
		  fadeIn.classList.add("fade-in-active");
		}
	  });
  
	  slideIns.forEach(slideIn => {
		const slideInPosition = slideIn.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.3;
  
		if (slideInPosition < screenPosition) {
		  slideIn.classList.add("slide-in-active");
		}
	  });
	}
  
	// Check if elements are in view on scroll and resize
	function handleScrollResize() {
		handleAnimation();
	  }
	
	  window.addEventListener("scroll", handleScrollResize);
	  window.addEventListener("resize", handleScrollResize);
	
	  // Trigger initial animation check
	  handleAnimation();
	});
	
  