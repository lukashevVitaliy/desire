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
		autoplay: true,
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
		autoplay: true,
		responsive: [
			{
				breakpoint: 1701,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8
				}
			},
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 1051,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 721,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 671,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 361,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			
		]
	});

	let mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});

	if ($(window).width() < 670) {
		$('.works-path__item--measuring').appendTo($('.works-path__items-box'));
	}


});

