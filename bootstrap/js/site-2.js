
jQuery( document ).ready(function() {
   if(jQuery(window).width() > 768 && jQuery('.parallex_10').length > 0){  	
	var durationRight = jQuery('#content-rightanim').outerHeight();
	var rightHeight = jQuery('#content-rightanim').outerHeight();
	var leftHeight = jQuery('#content-leftanim').outerHeight();
    var appliedTop = leftHeight - rightHeight;

	//console.log(durationRight);
	//console.log(jQuery("#content-leftanim"));

	var controller2 = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({triggerElement: "#content-rightanim", duration: durationRight, triggerHook: 0})
	// animate color and top border in relation to scroll position
	.setTween("#content-leftanim", {y: -appliedTop}) // the tween durtion can be omitted and defaults to 1
	//.addIndicators({name:"pin", colorStart: "red", colorEnd: "red", colorTrigger: "red"}) // add indicators (requires plugin)
	.addTo(controller2);
   }
});
