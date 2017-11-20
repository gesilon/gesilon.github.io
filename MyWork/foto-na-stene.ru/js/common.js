$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька owlCarousel v2
	$(".owl-carousel").owlCarousel({
				// singleItem : "true", //not work
				// transitionStyle:"fadeUp",  //not work
				items:1, //Кол-во отображаемых элементов
				// dots:false,
                loop:true, //Зацикливаем слайдер
                margin:0, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                // responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                //     0:{
                //         items:1
                //     },
                //     600:{
                //         items:2
                //     },
                //     1000:{
                //         items:4
                //     }
                // }
});
	//Документация: https://owlcarousel2.github.io/OwlCarousel2/
	// var owl = $(".owl-carousel").owlCarousel();
	// owl.owlCarousel({
	// 	items : 4
	// });


// $('#carouselOne').owlCarousel({
//                 loop:true, //Зацикливаем слайдер
//                 margin:50, //Отступ от элемента справа в 50px
//                 nav:false, //Отключение навигации
//                 autoplay:true, //Автозапуск слайдера
//                 smartSpeed:1000, //Время движения слайда
//                 autoplayTimeout:2000, //Время смены слайда
//                 responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
//                     0:{
//                         items:1
//                     },
//                     600:{
//                         items:2
//                     },
//                     1000:{
//                         items:4
//                     }
//                 }
// });


// $("#owl-carousel-main-2").owlCarousel({
// 				// singleItem : "true", //not work
// 				// transitionStyle:"fadeUp",  //not work
// 				items:1, //Кол-во отображаемых элементов
// 				// dots:false,
//                 loop:true, //Зацикливаем слайдер
//                 margin:0, //Отступ от элемента справа в 50px
//                 nav:true, //Отключение навигации
//                 autoplay:true, //Автозапуск слайдера
//                 smartSpeed:10000, //Время движения слайда
// });

    $('#owl-carousel-main-3').owlCarousel({
        items:4,
        dots:true,
        nav:true,
        loop:false,
        // center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});