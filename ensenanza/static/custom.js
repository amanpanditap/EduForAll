/* JS Document */

/******************************
  Init Testimonials Slider

******************************/

$(document).ready(function()
{
	"use strict";

	
	/* 

	 Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			var testSlider = $('.testimonials_slider');
			testSlider.owlCarousel(
			{
				animateOut: 'fadeOut',
    			animateIn: 'flipInX',
				items:1,
				autoplay:true,
				loop:true,
				smartSpeed:1200,
				dots:false,
				nav:false
			});
		}
	}
});