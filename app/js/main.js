$(function () {

	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});

	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowLeft"><img src="images/icons/blog/prev.svg" alt="left arrow"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowRight"><img src="images/icons/blog/next.svg" alt="left arrow"></button>'
	});

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
		autoplay: true
	});

	let mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});
});

