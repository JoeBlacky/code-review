$(document).ready(function() {


	// фиксированный header 
	//get header height
	var getHeaderHeight = $('.header_container_wrapper').outerHeight();

	//init last scroll position
	var lastScrollPosition = 0;

	//$('.header_container_wrapper').css('top', '-' + getHeaderHeight + 'px');// что бы поднималось когда вверх

	$(window).scroll(function(){
		var currentScrollPosition = $(window).scrollTop();
		if ($(window).scrollTop() > 0){

			$('body').addClass('activeScroll').css({'padding-top': 85});
			$('.header_container_wrapper').css({
				'top': 0,
			});

			if(currentScrollPosition < lastScrollPosition){
				$('.header_container_wrapper').css('top', 0);
			} 
			lastScrollPosition = currentScrollPosition;
		}
		else {
			$('body').removeClass('activeScroll').css('padding-top', 0);
		}
	});


// кнопка меню
	$('#menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('.navi').slideToggle(600);
	});


// magnific-popup (для 3 стр.)
	$('.mfp-gall').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled: true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});


	// скрипт для скрола мапы только после клика
	$('.map').click(function () {
		$('.map iframe').css("pointer-events", "all");
	});

	$( ".map" ).mouseleave(function() {
		$('.map iframe').css("pointer-events", "none"); 
	});
	

	// скрипт для  jq bootstrap validator
	
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 
	


	// кнопка наверх (scroll up)
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 300){ 
			$('.btn-up').fadeIn("slow")
		}
		else{
			$('.btn-up').fadeOut("fast")
		}
	});

	$(".btn-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});



}); // конец ready 

	


// Прилоадер 
$(window).load(function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});