function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function() {

	/* popup btn */
	$('.back-call').on('click', function(e) {
		$('.popup-form-wrap').fadeIn('slow');
	});
	$('.popup-form__close').on('click', function(e) {
		$('.popup-form-wrap').fadeOut('slow');
	});
	/* popup btn eof */

	/* jquery placeholder */
	if(!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();		
	}
	/* jquery placeholder */

	/* slider */
	$('.slider').slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		autoplay: true,
  		autoplaySpeed: 3500,
	});
	/* slider eof */

	/* pageScroll2Id */
	$('.header__menu ul li a').mPageScroll2id({
		scrollSpeed: 1400,
		clickedClass: "active",
		targetClass: "active",
		highlightClass: "active",
		offset: 50
	});
	/* pageScroll2Id eof */

	/* mobile btn */
	$('#sandwich-js, .menu_item').click(function() {
  		$('.sandwich').toggleClass('active');
  		$('.header__menu').toggleClass('active');
	});
	/* mobile btn eof */

	var handler = function(){
	
		var viewport_wid = viewport().width;
		
		/* scrol header */
		$(window).scroll(function(){
			var header = $('.header-wrap-js');
			if($(window).scrollTop() > 60){
				header.css({'position': 'fixed', 'borderBottom': '2px solid #f5f6f9'}).addClass('animated fadeInDown');
			} else {
				header.css({'position': 'relative', 'borderBottom': 'none'}).removeClass('animated fadeInDown');
			}
		});
		/* scrol header eof */

		if (viewport_wid < 1200) {
			$('.back-call').text('ЗАКАЗАТЬ ЗВОНОК');
		}
		else {
			$('.back-call').text('ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК');
		}

		if (viewport_wid <= 768) {
			$('.back-call').text('').html('<i class="fa fa-phone" style="font-size: 24px; margin-top: 1px;" aria-hidden="true"></i>');
		}

		if (viewport_wid < 450) {
			var contacts = $('.header__contacts').remove();
			contacts.appendTo($('.header__menu'));
		}

		/* wow js */
		if (viewport_wid > 992) {			
			new WOW().init();			
		}
		/* wow js eof */

	}

	$(window).bind('load', handler);
	$(window).bind('resize', handler);

});
