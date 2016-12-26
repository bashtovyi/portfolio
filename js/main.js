$(document).ready(function() {

  // Скрипт  плавной прокрутки 
  $(".scroll").on("click", "a", "span", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });



  $('#portfolio-projects').mixItUp();


  $(".fancybox").fancybox({
    // Default - with fix from scroll to top
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  // jQuery Validate JS
  $("#contact-form").validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true },
      // skype:  { required: true },
      // phone:  { required: true },
      message: { required: true }
    },

    messages: {
      name: "Пожалуйста, введите свое имя",
      email: {
        required: "Пожалуйста, введите свой email",
        email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
      },
      message: "Пожалуйста, введите текст сообщения"
    },

    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

  // Функция AJAX запрса на сервер
  function ajaxFormSubmit() {
    var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html) {
        $("#contact-form").slideUp(800);
        $('#answer').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }


});
