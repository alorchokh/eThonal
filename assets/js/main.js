	// jQuery to Mix itUp
	$(window).load(function() {
		$('#protfolio_contents').mixItUp();
	});	
	// jQuery to Owl Carousel
	$(window).load(function() {
		jQuery("#owl-example").owlCarousel({
		   items : 3,
		   itemsDesktop : [1199,3],
		   itemsDesktopSmall : [979,3]

		});
	});	

	// jQuery to Google map
	$(window).load(function() {
		new Maplace({
			show_markers: true,
			locations: [{
				lat: 26.027365, 
				lon: 88.464611,
				zoom: 10,
				title: 'Iman',
			}],
			styles: {
				'Night': [{
					featureType: 'all',
					stylers: [
						{ invert_lightness: 'true' }
					]
				}],
				'Greyscale': [{              
					featureType: 'all',
					stylers: [
						{ saturation: -100 },
						{ gamma: 0.50 }
					]
				}]
			}		
			
		}).Load();
	});
	// jQuery to counterUp
	$(window).load(function() {
		jQuery('.counter').counterUp({
			delay: 20,
			time: 10000
		});
	});
	
	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
