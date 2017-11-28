


(function($) {
	var storeReq = ['Home'];
	$(document).ready(function() {
		/*jQuery('.benefits').each(function() {

			var ullength = jQuery(this).find("ul").length;
			var divlength = jQuery(this).find("div").length;
			var imglength = jQuery(this).find("img").length;
			if (ullength === 0 && divlength == 0 && imglength == 0) {
				jQuery(this).css("display", "none");
			}
		});
		*/

		var i = 2;
		$("#mm-1").addClass("label-1");
		var counter = 1;
		$(".mm-panels li.expanded .mm-next").on('click', function() {
			$($(this).attr("href")).addClass("label-" + i);
			i++;
			if ($(window).width() < 1025) {
				storeReq[counter] = $(this).siblings('a').text();
				counter++;
				$(this).parents('.mm-hasnavbar').siblings('.label-' + counter).find('.mm-sronly').text('Back To ' + storeReq[(counter - 2)]);
			}
		});
		$(".mm-panels .mm-prev ,.mm-panels .mm-title").on('click', function() {
			i--;
			counter--;
			$(".label-" + i).removeClass("label-" + i);
			if ($(window).width() < 1025) {
				storeReq.pop();
			}
		});
		$(".mm-navbar .mm-sronly").text("back");
		$(".author-box p.intro").click(function() {
			$(".author-box .detail").slideToggle();
			$(".author-box p.intro").toggleClass("active");
		});
		$(".responsive-menu-block-wrapper #horizontal-menu").attr("ind", 0);
		$(".responsive-menu-block-wrapper #horizontal-menu").children().each(function(key, val) {
			var allul = $(val).find("ul");
			for (var i = 0; i < allul.length; i++) {
				var abc = parseInt($(allul[i]).closest("li").closest("ul").attr("ind"));
				$(allul[i]).addClass("sub-label-" + (abc + 1)).attr("ind", (abc + 1));
			}
			$(val).addClass($(val).find("> a").text().toLowerCase());
		});
		$("#mm-1 ul.menu.nav.navbar-nav.mm-listview").children().each(function(key, val) {
			$(val).addClass($($(val).find("> a")[$(val).find("a").length - 1]).text().toLowerCase());
		});
		$('body').on('click', '.content-wrap a.open_popup', function() {
			if ($('h2.modal-title')) {
				$('h2.modal-title').empty();
			}
			if ($(this).hasClass('ty_div')) {
				if ($('.modal_ty_wrap').length)// use this if you are using class to check
				{
					$('.modal_ty_wrap').remove();
				}
				$('.form-iframe-wrap').hide();
				$('.modal_img_wrap').hide();
				var formbody = ($(this).siblings('span.hidethis').text() == undefined) ? '' : $(this).siblings('span.hidethis').html();
				$('.modal_img_wrap').after('<div class="modal_ty_wrap">' + formbody + '</div>');
			} else {
				/** Work here **/
				if ($('.modal_ty_wrap').length)// use this if you are using class to check
				{
					$('.modal_ty_wrap').remove();
				}
				$('.form-iframe-wrap').show();
				$('.modal_img_wrap').show();
				var formbody = ($(this).siblings('span.hidethis').text() == undefined) ? '' : $(this).siblings('span.hidethis').html();
				$('.modal#exampleModal .modal-dialog .modal-content .form-iframe-wrap h3').html(formbody);
				var imgurl = ($(this).parents('.view-resources-library-popup').siblings('p.hidethis').find('img').attr('src') == undefined) ? '' : $(this).parents('.view-resources-library-popup').siblings('p.hidethis').find('img').attr('src');
				$('.modal#exampleModal .modal-dialog .modal-content .modal-body div.modal_img_wrap').css({
					'background-image' : 'url(' + imgurl + ')'
				});
				if (imgurl == '') {
					$('.modal#exampleModal .modal-dialog .modal-content .modal-body div.modal_img_wrap').hide();
				} else {
					$('.modal#exampleModal .modal-dialog .modal-content .modal-body div.modal_img_wrap').show();

				}
			}
		})
		$('#exampleModal').on('show.bs.modal', function(event) {
			var button = $(event.relatedTarget)// Button that triggered the modal
			var iframe_url = button.data('iframe-url')// Extract info from data-* attributes
			var banner_text = button.data('banner-text')
			// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
			// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
			var modal = $(this)
			modal.find('.modal-header h2.modal-title').html(banner_text);
			modal.find('.modal-body iframe').attr('src', iframe_url);
			modal.find('.modal-body iframe').attr("id", "landing-form-frame");
			modal.find('.modal-body iframe').attr("name", "landing-form-frame");
			var imgurl = $(this).siblings('img').attr('src');
		})
		if (jQuery(window).width() > 767) {
			showHiddenContent();
		}

		function showHiddenContent() {

			jQuery('.customer-page').on('click', '.box-row', function(e) {

				e.stopImmediatePropagation();
				if ($(this).hasClass("active")) {
					closeEffect();
				} else {
					jQuery('.customer-page-new').children('.detail-box').remove();
					jQuery('.customer-page-new .box-row').removeClass('active');
					jQuery(this).parent().after($(this).find('.detail-box').clone());
					jQuery('.customer-page-new').children('.detail-box').addClass('clearfix');
					$($(".customer-page-new").children().find(".img-box img")).each(function(index, element) {
						var srcStr = $(element).attr("src");
						if ((srcStr.indexOf("-hover")) != -1) {
							var newSrc = srcStr.replace("-hover", "");
							$(element).attr("src", newSrc)
						}
					});
					jQuery(this).addClass('active');
					var clickImg = $('.active .img-box img').attr("src");
					if ((clickImg.indexOf("-hover")) == -1) {
						$('.active .img-box img').attr("src", clickImg.split(".png")[0] + "-hover.png");
					}
				}

			});
			jQuery('.customer-page').on('click', '.close', function(e) {
				closeEffect();
			})
		}

		var closeEffect = function() {
			jQuery('.customer-page-new .box-row').removeClass('active');
			jQuery('.customer-page-new').children('.detail-box').remove();
			$($(".customer-page-new").children().find(".img-box img")).each(function(index, element) {
				var srcStr = $(element).attr("src");
				if ((srcStr.indexOf("-hover")) != -1) {
					var newSrc = srcStr.replace("-hover", "");
					$(element).attr("src", newSrc)
				}
			});
		}
		//For video_by_category - customer_success page
		if (jQuery(window).width() > 767) {
			$('.video_by_cat').on('click', '.box-row', function() {
				jQuery('.video_by_cat .box-row').removeClass('active');
				jQuery('.video_by_cat').children('.detail-box').remove();
				jQuery(this).parent().after($(this).find('.detail-box').clone());
				jQuery(this).addClass('active');
			})
			$('.video_by_cat').on('click', '.close', function() {
				jQuery('.video_by_cat').children('.detail-box').remove();
				jQuery('.video_by_cat .box-row').removeClass('active');
			})
		}

		if (jQuery(window).width() < 768) {
			jQuery('.customer-page-new').on('click', '.box-row', function() {
				jQuery('.customer-page-new .box-row').removeClass('active');
				jQuery(this).addClass('active');
			})
			jQuery('.customer-page-new').on('click', '.close', function() {
				jQuery('.customer-page-new .box-row').removeClass('active');
			})

			jQuery('.video_by_cat').on('click', '.box-row', function() {
				jQuery('.video_by_cat .box-row').removeClass('active');
				jQuery(this).addClass('active');
			})
			jQuery('.video_by_cat').on('click', '.close', function() {
				jQuery('.video_by_cat .box-row').removeClass('active');
			})
		}

	});
	$(window).on('load',function() {
		$('body').find('#mm-1 > div').find('a').text(storeReq[0]);
		$(".header").removeClass("coll");
	});

	if (jQuery(window).width() < 1025) {
		$(".categories-row").click(function() {
			$(".blog-detail-sidebar .region-content-right").slideToggle();
			$(".categories-row").toggleClass("active");
		});
	}

})(jQuery);



//Half slider in case study. - comment for load.
// jQuery(window).scroll(function() {
// if(jQuery(window).width()>1024) {
// if(jQuery(window).scrollTop()>(jQuery('.bannner-section').offset().top-50)&&!(jQuery('.bannner-section').hasClass('fix'))) {
// jQuery('.bannner-section').addClass('fix');
// } else if(jQuery(window).scrollTop()==0) {
// jQuery('.bannner-section').removeClass('fix');
// }
// }
// });

jQuery(window).scroll(function() {

	if (jQuery(window).width() > 1024) {
		if (jQuery('.bannner-section').length > 0) {
			var upprheight = parseInt(jQuery("#navbar").height()) + parseInt(jQuery(".region-highlighted").height());
			if (jQuery(window).scrollTop() > jQuery('.bannner-section').offset().top && !(jQuery('.bannner-section').hasClass('fix'))) {
				jQuery('.bannner-section').addClass('fix');
			} else if (jQuery(window).scrollTop() <= upprheight) {
				jQuery('.bannner-section').removeClass('fix');
			}
		}
	}
});
( function($) {'use strict';

		Drupal.behaviors.bootcustom = {

			attach : function(context, settings) {

				// new popup('.webinar-video', '.webinar-video-url', '.lightbox', '.close');
				// /*$(document).ajaxComplete(function() {
				// new popup('.webinar-video', '.webinar-video-url', '.lightbox', '.close');
				// });*/
				// // new popup('.view2', '.popup2', '.lightbox', '.close');
				// // new popup('.view3', '.popup3', '.lightbox', '.close');
				// function popup(click_event, open_div, bag_color, close) {
				// jQuery(click_event).click(function() {
				// jQuery(open_div).fadeIn(350);
				// jQuery(bag_color).fadeIn(350);
				// jQuery("body").addClass("add");
				// });
				// jQuery(close).click(function() {
				// jQuery(open_div).fadeOut(350);
				// jQuery(bag_color).fadeOut(350);
				// jQuery("body").removeClass("add");
				// });
				// jQuery(bag_color).click(function() {
				// jQuery(open_div).fadeOut(350);
				// jQuery(bag_color).fadeOut(350);
				// jQuery("body").removeClass("add");
				// });
				// }

				// select-box

				// $(document).ready(function() {
				// var selects = [];
				// $('.form-select').each(function(i, el) {
				// var mySelect = new Select(el);
				// selects.push(mySelect);
				// });
				// });

				// if ($(window).width() > 1024) {
				// if ($(".form-select").length) {
				// $(".form-select").selectbox({
				// mobile : false
				// })
				// }
				// }

				if (jQuery('.faq_thankyou_popup .region-highlighted-top').text().trim().length) {
					if (!jQuery('.popitup').length) {
						jQuery('.faq_thankyou_popup .region-highlighted-top').wrapInner("<div class='popitup'><h3></h3></div>");
					}
				}

				$('#rlp_view_all').click(function(event) {
					event.preventDefault();
					$('.views-exposed-form .form-item-items-per-page select.form-select').val("All").change();
					$('.views-exposed-form .form-actions button.form-submit.btn-info').click();
					$(document).ajaxComplete(function() {

						$('#rlp_view_all').hide();
					});
				})
				$(".video_library_page").on("click", ".views-field-field-video", function() {
					$(this).siblings(".arrow-down").click();
				});
				$(".video_library_page").on("click", ".arrow-down", function() {
					$("ul.slides li.active").each(function(index, value) {
						$(this).removeClass("active");
					});
					$(this).parent("li").addClass("active");
					var text_h1 = $(this).siblings(".views-field-field-text-h1").html();
					var intro_para = $(this).siblings(".views-field-field-intro-para").find("p").html();
					var embed_vid = $(this).siblings(".views-field-field-video-1").html();
					$(this).parents(".view-id-video_by_category_block.view-display-id-block_2 .view-content").siblings(".view-footer").find("h3").html(text_h1);
					$(this).parents(".view-id-video_by_category_block.view-display-id-block_2 .view-content").siblings(".view-footer").find("p").html(intro_para);
					$(this).parents(".view-id-video_by_category_block.view-display-id-block_2 .view-content").siblings(".view-footer").find(".video-fp-wrapper").removeClass("hide");
					$(this).parents(".view-id-video_by_category_block.view-display-id-block_2 .view-content").siblings(".view-footer").find(".video-fp-right").html(embed_vid);
				});

				$(".video_library_page").on("click", ".close", function() {
					$("ul.slides li.active").each(function(index, value) {
						$(this).removeClass("active");
					});
					$(this).parents(".video-fp-wrapper").addClass("hide");
					$(this).parents(".video-fp-wrapper").find("h3").html("");
					$(this).parents(".video-fp-wrapper").find("p").html("");
					$(this).parents(".video-fp-wrapper").find(".video-fp-right").html("");
				});
			}
		};

		$('body').on("touchend click", '.flex-next, .flex-prev', function() {

			if ($(window).width() <= 1024)
				$(this).parents('.view-content').siblings('.view-footer').find('span.close').click();
		});
		$(".faq-accordian .accordian_row").off('click').on('click', function(e) {
			$(this).parents().siblings().find(".box").slideUp();
			$(this).siblings(".box").slideToggle();
			$(this).parents().siblings().find(".accordian_row").removeClass("active");
			$(this).toggleClass("active");
		});
		$(document).ajaxComplete(function() {
			$(".faq-accordian .accordian_row").off('click').on('click', function(e) {
				$(this).parents().siblings().find(".box").slideUp();
				$(this).siblings(".box").slideToggle();
				$(this).parents().siblings().find(".accordian_row").removeClass("active");
				$(this).toggleClass("active");
			});
		});

		$('body').on("click", ".popitup .close", function() {
			$(".popitup").hide();
			$(".faq_thankyou_popup").hide();
		});

	}(jQuery));

// masonry
jQuery(document).ready(function() {

	var settime;
	jQuery(".toggle_links").click(function(event) {

		var thistext = jQuery(this).text();
		var thisIndex = jQuery(this).closest('.masonry-item').index();
		//console.log(thistext)
		//console.log(thisIndex)

		//console.log(this)

		jQuery(".toggle_links").each(function(index, value) {

			if (jQuery(this).text() == "Show less") {
				var dataValue = jQuery(this).attr('data-value')
				jQuery(this).text(dataValue);
			}
		})
		/// in starting

		//console.log(jQuery(this).text()!= 'Show less');

		if (thistext == 'Show less') {

			var dataValue = jQuery(this).attr('data-value')
			jQuery(this).text(dataValue);

		} else {

			jQuery(this).text("Show less");
			//console.log("jooo");

		}
		//

		jQuery(this).next(".toggle-content").slideToggle(300);

		jQuery(this).closest(".views-field-nothing").closest(".masonry-item.views-row").siblings('.masonry-item.views-row').find(".toggle-content").slideUp(300);

		clearTimeout(settime);
		settime = setTimeout(function() {
			jQuery('.masonry-layout').masonry('layout');
		}, 100)
		settime = setTimeout(function() {
			jQuery('.masonry-layout').masonry('layout');
		}, 200)
		settime = setTimeout(function() {
			jQuery('.masonry-layout').masonry('layout');
		}, 310)

	});
	jQuery("#landing-form-frame").on('load',function() {
		var iframe = jQuery(this).contents();
		iframe.find('.webinar-video-url').insertAfter('.lightbox');
		new popup(iframe.find('.webinar-video'), jQuery('.webinar-video-url'), jQuery('.lightbox'), jQuery('.close'));
		//new popup(iframe.find('.webinar-video'), iframe.find('.webinar-video-url'), iframe.find('.lightbox'), iframe.find('.close'));
	});
	new popup(jQuery('.webinar-video'), jQuery('.webinar-video-url'), jQuery('.lightbox'), jQuery('.close'));

	function popup(click_event, open_div, bag_color, close) {
		click_event.click(function() {
			open_div.fadeIn(350);
			bag_color.fadeIn(350);
			jQuery("body").addClass("add");
		});
		close.click(function() {
			open_div.fadeOut(350);
			bag_color.fadeOut(350);
			jQuery("body").removeClass("add");
		});
		bag_color.click(function() {
			open_div.fadeOut(350);
			bag_color.fadeOut(350);
			jQuery("body").removeClass("add");
		});
	}

})
if (jQuery('body').hasClass('path-free-tagging-test')) {

	function getSelectedText(elementId) {
		var elt = document.getElementById(elementId);

		if (elt.selectedIndex == -1)
			return null;

		return elt.options[elt.selectedIndex].text;
	}

	var text = getSelectedText('edit-field-blog-taxo-target-id');

	// console.log(text,text != '- Any -');
	if (text == "- Any -") {
		document.getElementById("select-category").innerHTML = " ";
	} else {
		document.getElementById("select-category").innerHTML = text;
	}
}

if (jQuery('body').hasClass('path-blogs')) {

	function getSelectedText(elementId) {
		var elt = document.getElementById(elementId);

		if (elt.selectedIndex == -1)
			return null;

		return elt.options[elt.selectedIndex].text;
	}

	var text = getSelectedText('edit-field-blog-taxo-target-id');

	// console.log(text,text != '- Any -');
	if (text == "- Any -") {
		document.getElementById("select-category").innerHTML = " ";
	} else {
		document.getElementById("select-category").innerHTML = text;
	}
}
/*

jQuery(document).ready(function() {
new popup('.webinar-video', '.webinar-video-url', '.lightbox', '.close');

// new popup('.view2', '.popup2', '.lightbox', '.close');
// new popup('.view3', '.popup3', '.lightbox', '.close');
function popup(click_event, open_div, bag_color, close) {
jQuery(click_event).click(function() {
jQuery(open_div).fadeIn(350);
jQuery(bag_color).fadeIn(350);
jQuery("body").addClass("add");
});
jQuery(close).click(function() {
jQuery(open_div).fadeOut(350);
jQuery(bag_color).fadeOut(350);
jQuery("body").removeClass("add");
});
jQuery(bag_color).click(function() {
jQuery(open_div).fadeOut(350);
jQuery(bag_color).fadeOut(350);
jQuery("body").removeClass("add");
});
}
});

*/

// jQuery(document).ready(function() {
// var selects = [];
// jQuery('.form-select').each(function(i, el) {
// var mySelect = new Select(el);
// selects.push(mySelect);
// });
// });
