"use strict";

//Подключение js других страниц или элементов///////////////////////////////////////////////////////////////////////////////////////////////
//Функция для использования конструкции вместо object-fit: cover; для IE///////////////////////////////////////////////////////////////////////////////////////////////
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg(); //Функция перемещающая курсор в input с типом tel в начало строки///////////////////////////////////////////////////////////////////////////////////////////////
// $.fn.setCursorPosition = function (pos) {
// 	if ($(this).get(0).setSelectionRange) {
// 		 $(this).get(0).setSelectionRange(pos, pos);
// 	} else if ($(this).get(0).createTextRange) {
// 		 let range = $(this).get(0).createTextRange();
// 		 range.collapse(true);
// 		 range.moveEnd('character', pos);
// 		 range.moveStart('character', pos);
// 		 range.select();
// 	}
// };
// $('input[type="tel"]').on('click', function () {
// 	$(this).setCursorPosition(3);
// });
//Маска для input с типом tel (Нужен плагин jquery.maskedinput)///////////////////////////////////////////////////////////////////////////////////////////////
// $("input[type=tel]").mask("+7 (999) 999-9999");
//Меняем css свойства блокам при клике по кнопке и ссылкам, необходимо так же задать такие же изменения при клике по документу вне объекта///////////////////////////////////////////////////////////////////////////////////////////////
// $('.btn, .link').on('click', function () {
// 	if (!$('.link').hasClass('openDone')) {
// 		 $('.link').addClass('openDone');
// 		 $('.li').css({
// 			  'left': '-15px',
// 			  'right': '-15px'
// 		 });
// 	} else {
// 		 $('.link').removeClass('openDone');
// 		 $('.li').css({
// 			  'left': '-100vw',
// 			  'right': '150vw'
// 		 });
// 	}
// });
//Удаляем атрибут при разрешении экрана больше 851///////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('resize', function () {
// 	if ($(window).width() > 851) {
// 		 $('.li').removeAttr('style');
// 	}
// });
//Реализации tab///////////////////////////////////////////////////////////////////////////////////////////////
// $('.tabs__wrapper .tab').on('click', function (event) {
// 	var id = $(this).attr('data-id');
// 	$('.tabs__wrapper').find('.tab-item').removeClass('active-tab').hide();
// 	$('.tabs__wrapper .advantages__inner').find('.tab').removeClass('active');
// 	$(this).addClass('active');
// 	$('#' + id).addClass('active-tab').fadeIn();
// 	return false;
// });
//Скролл к якорям ссылок///////////////////////////////////////////////////////////////////////////////////////////////
// $('.advantages__item').on('click', function (event) {
// 	event.preventDefault();
// 	let id = $(this).attr('href'),
// 		top = $(id).offset().top,
// 		categoryHight = $('.categories__list').height(),
// 		headerHight = $('.header').height();
// 	$('body,html').animate({
// 		scrollTop: top - categoryHight - headerHight - 20
// 	}, 800);
// });
//Подключение Slick слайдера с настройками///////////////////////////////////////////////////////////////////////////////////////////////

$('.popular__slider').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="img/arrow_left.svg" alt="Arrow-left" /></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="img/arrow_right.svg" alt="Arrow-right" /></button>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  pauseOnFocus: false,
  pauseOnHover: true,
  swipeToSlide: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767.98,
    settings: {
      arrows: false,
      slidesToShow: 3
    }
  }, {
    breakpoint: 479.98,
    settings: {
      arrows: false,
      slidesToShow: 2
    }
  }]
}); //Подключение rateYo///////////////////////////////////////////////////////////////////////////////////////////////

$('.rating__static').rateYo({
  starWidth: '13px',
  ratedFill: '#458500',
  readOnly: true,
  rating: 4.5,
  normalFill: 'transparent',
  starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 32 32"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>'
}); // $('.rating__changing').rateYo({
// 	starWidth: '15px',
// 	ratedFill: '#ef6f2e',
// 	normalFill: 'transparent',
// 	starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>',
// });
//Добавление класса блоку при прокрутке///////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('scroll', function () {
// 	if ($(this).scrollTop() > 20) {
// 		(!$('block').hasClass('class'))
// 		$('block').addClass('class');
// 	}
// 	else {
// 		$('block').removeClass('class');
// 	}
// });
//Всплывающая подсказка///////////////////////////////////////////////////////////////////////////////////////////////
// $('.hint__Link').on('click', function () {
// 	$('.hint__block').fadeToggle();
// });
//Скрытие элемента по клику вне его///////////////////////////////////////////////////////////////////////////////////////////////
// $(document).on('click', function (e) {
// 	if (!$('.hint__Link').is(e.target) && $('.hint__Link').has(e.target).length === 0 &&
// 		 !$('.hint__block').is(e.target) && $('.hint__block').has(e.target).length === 0) {
// 		 $('.hint__block').fadeOut();
// 	}
// });
//Удаляем вместе с собой блок прапрародитель///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.remove__link', function () {
// 	$(this).parent().parent().remove()
// });
//Добавляем блок без элементов с id в конец блока будущего родителя при нажатии на кнопку-ссылку///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.added__link', function () {
// 	$('.parent__block').append('<div></div>')
// });
//Скрываем блок при установке флажка в чекбоксе и показываем при отключении///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', 'input#formCheckbox', function () {
// 	if (!$('.files__item').hasClass('openDone')) {
// 		$('.files__item').addClass('openDone');
// 		$('.files__item').fadeOut(300).show();
// 		$('.files__item').removeAttr('style');
// 		$('.files__input').prop('required', false);
// 	} else {
// 		$('.files__item').removeClass('openDone');
// 		$('.files__item').fadeIn(300);
// 		$('.files__input').prop('required', true);
// 	}
// });
//Добавление всех имен загруженных файлов в input multiple через запятую в span///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', '.files__input', function () {
// 	let name_file = [];
// 	for (let i = 0; i < $(this).get(0).files.length; ++i) {
// 		name_file.push($(this).get(0).files[i].name);
// 	}
// 	$(this).next().next('span').text(name_file.join(", "));
// });
//Форма обратной связи (без файлов)///////////////////////////////////////////////////////////////////////////////////////////////
// $(".fancybox-form").on('submit', function () {
// 	let th = $(this);
// 	$.ajax({
// 		type: "POST",
// 		url: "mail.php",
// 		data: th.serialize()
// 	}).done(function () {
// 		alert("Спасибо, Ваша заявка принята. Наш специалист свяжется с Вами в ближайшее время. График работы: с 10 до 19 часов ежедневно.");
// 		setTimeout(function () {
// 			th.trigger("reset");
// 		}, 1000);
// 	});
// 	return false;
// });
//Форма отправки с файлами и выведенными именами файлов в span///////////////////////////////////////////////////////////////////////////////////////////////
// $(function () {
// 	document.getElementById('form').addEventListener('submit', function (evt) {
// 		let pr = document.querySelector('.progress-bar'),
// 			// checkboxNoInspect = document.querySelector('.files__item-noinspect'),
// 			// NoInspect = document.querySelectorAll('.files__input-noinspect'),
// 			// checkboxNoDriver = document.querySelectorAll('.files__item-nodrivers'),
// 			// noDriver = document.querySelectorAll('.files__input-nodrivers'),
// 			// inputs = document.getElementById('form').querySelectorAll('.files__btn span');
// 			let http = new XMLHttpRequest(),
// 			f = this;
// 		let th = $(this);
// 		evt.preventDefault();
// 		//Появление анимации загрузки файлов пока они грузятся
// 		http.upload.onloadstart = function () {
// 			pr.style.opacity = 1;
// 			pr.style.visibility = 'visible';
// 		};
// 		/////////////////////////////////////////////////////////////////////////
// 		http.onreadystatechange = function () {
// 			if (http.readyState == 4 && http.status == 200) {
// 				alert(http.responseText);
// 				console.log(http.responseText);
// 				if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
// 					th.trigger("reset"); //Очестка всех input
// 					// inputs.forEach(element => {
// 					// 	element.textContent = 'файл не выбран'; //Очистка названий файлов
// 					// });
// 					// checkboxNoInspect.classList.remove('openDone');//В случае если перед отправкой данный блок был скрыт при помощи чекбокса убираем у него класс openDone
// 					// checkboxNoInspect.style.display = '';//Очищаем стиль display
// 					// checkboxNoDriver.forEach(element => {//То же самое, только этот код если чекбокс мог скрыть несколько таких одинаковых элементов
// 					// 	element.classList.remove('openDone');
// 					// });
// 					// checkboxNoDriver.forEach(element => {//И очищаем у них стиль display
// 					// 	element.style = '';
// 					// });
// 					// NoInspect.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					// noDriver.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					//Скрытие анимации загрузки файлов после их загрузки
// 					pr.style.opacity = 0;
// 					pr.style.visibility = 'hidden';
// 				}
// 			}
// 		};
// 		http.onerror = function () {
// 			alert('Ошибка, попробуйте еще раз');
// 		};
// 		http.open("POST", "contact.php", true);
// 		http.send(new FormData(f));
// 	}, false);
// });
// Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss///////////////////////////////////////////////////////////////////////////////////////////////

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //Основной блок///////////////////////////////////////////////////////////////////////////////////////////////
// Адаптивное меню

$('.menu__btn, .menu__body').on('click', function () {
  $('.menu__btn, .menu__body').toggleClass('open');
});
$(document).on('click', function (e) {
  if (!$('.menu__btn').is(e.target) && $('.menu__btn').has(e.target).length === 0 && !$('.menu__body').is(e.target) && $('.menu__body').has(e.target).length === 0) {
    $('.menu__body, .menu__btn').removeClass('open');
  }
}); //Фиксируем категории при скроле до них

$(window).on('load resize', function () {
  var scrollHight = $('.categories__menu').offset().top; //Вычисляем расстояние от верха окна до блока с классом .categories__menu

  var windowWidth = $(window).width(); //Вычисляем ширину экрана

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > scrollHight - (55 + 20 * ((windowWidth - 320) / 1600))) {
      !$('.categories__menu, .popular').hasClass('_fixed');
      $('.categories__menu, .popular').addClass('_fixed');
    } else {
      $('.categories__menu, .popular').removeClass('_fixed');
    }
  });
});
$('.card__favorite').on('click', function () {
  $(this).toggleClass('_select');
});
var elements = document.querySelectorAll('.rating__info');
elements.forEach(function (el) {
  var count = el.textContent;
  var title = declination(count, [' отзыв', ' отзыва', ' отзывов']);
  var age = count + title;
  el.textContent = age;
});

function declination(number, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}