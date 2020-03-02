$(function() {

		//меню и анимация кнопки
	var menuBtn = $('.top-line_btn');
	var menu = $('.hide-mnu');
	var nav_link = $('.hide-mnu a');

	menuBtn.click(function() {
		menuBtn.toggleClass('top-line_btn__active');
		menu.toggleClass('hide-mnu__active');
	});
	nav_link.click(function() {
		menuBtn.toggleClass('top-line_btn__active');
		menu.toggleClass('hide-mnu__active');
	});


	//hover from vizor
	$('.vizor .card-item').mouseenter(function() {
		$('.vizor-img img').css('transform', 'scale(1.2)')
	});
	$('.vizor .card-item').mouseleave(function() {
			$('.vizor-img img').css('transform', 'scale(1)')
		});


	//модальные окна
	$('.price-img').magnificPopup({
		type: 'image'

	});


	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,
		alignTop: true,
		overflowY: 'scroll',

		closeBtnInside: false,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('a[href=#callback]').click(function() {
		$('#callback .formname, #callback-form .formname').val($(this).data('form'));
	});

	$('#form-btn').click(function() {
		$('#callback-form .formname').val($(this).data('form'));
	});

	$('a[href=#writeme]').click(function() {
		$('#writeme .formname').val($(this).data('form'));
	});

	//E-mail Ajax Send
	$('form.callback').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


		// скролл по меню
	$('.top-line_mnu a, .hide-mnu a').mPageScroll2id({ scrollEasing: "easeInOutQuint", offset: "0" });


		//Кнопка Наверх
	$('body').append('<button class="btn_up" />');

	$('.btn_up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000);
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 600){
			$('.btn_up').addClass('active');
		}
		else{
			$('.btn_up').removeClass('active');
		}

	});

		//анимация
	new WOW().init();



});
