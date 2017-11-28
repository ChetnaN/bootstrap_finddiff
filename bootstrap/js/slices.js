// slider 8 start here ------------------------------------ //
// (function($) {	
// 	$(document).ready(function() {
//     	$('.slider_8_cp11').bxSlider({
//       		mode: 'fade',
//       		onSliderLoad : function() {
// 				jQuery("#contentid-8-cp23").css("visibility", "visible");
// 			}
//     	});
//   	});
// })(jQuery);
// slider 8 end here ------------------------------------ //

// slider 4 start here ------------------------------------ //
(function($) {	
	$(window).on('load', function() {
		$('.bxslider').bxSlider({
			minSlides : 1,
			maxSlides : 4,
			moveSlides : 1,
			slideWidth : 360,
			slideMargin : 20
		});
	});

	$(window).on('load',function() {
		$('.bxsliderNew').bxSlider({
			pagerCustom : '#bx-pager',
			onSliderLoad : function() {
				jQuery("#sliceSlide4").css("visibility", "visible");
			}
		});
	});

	$(window).on('load',function() {
    	$('.slider_8_cp11').bxSlider({
      		mode: 'fade',
      		onSliderLoad : function() {
				jQuery("#contentid-8-cp23").css("visibility", "visible");
			}
    	});
  	});	
})(jQuery);
// slider 4 start here ------------------------------------ //