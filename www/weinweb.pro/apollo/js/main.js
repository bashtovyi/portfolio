$(document).ready(function() {

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');
	    
	});

	// При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	    }
	});

	$('nav.navigation a').on("click", function(){
		fnstart();
	});

	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 800
	});
	//slide2id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	
});




  
     
      	
     
