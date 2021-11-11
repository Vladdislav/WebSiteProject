
$(function(){

    // Function for scrollHeader
    function onScrollHeader() { // объявляем основную функцию onScrollHeader

        const header = $('.header'); // находим header и записываем в константу
        
        const classHidden = 'header--hidden'; 

        let prevScroll = $(window).scrollTop(); // узнаем на сколько была прокручена страница ранее
        let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

        $(window).scroll(() => { // при прокрутке страницы

        currentScroll = $(window).scrollTop(); // узнаем на сколько прокрутили страницу

        const headerHidden = () => header.hasClass(classHidden); // узнаем скрыт header или нет

            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.addClass(classHidden); // то скрываем header
                
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.removeClass(classHidden); // то отображаем header
                
            }

            prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент

        });

    };

    var wow = new WOW(
        {
            boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
            animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
            offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
            mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
            live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
            callback:     function(box) {
                // функция срабатывает каждый раз при старте анимации
                // аргумент box — элемент, для которого была запущена анимация
            },
        }
    );

    wow.init();
    onScrollHeader();

    // Adaptive animation
    if ($(window).width() < 426){
        $('.short-about__center').removeClass('slideInDown');
        $('.short-about__center').addClass('fadeIn');
        $('.portfolio__content-left').removeClass('fadeInLeft');
      
        // hexagons first block
        $('.portfolio__hexagon-busines').addClass('wow fadeInLeft');
        $('.portfolio__hexagon-severin').addClass('wow fadeInRight');
        $('.portfolio__hexagon-kitchen').addClass('wow fadeInLeft');
      
        $('.portfolio__hexagon-park').addClass('wow fadeInRight');
        $('.portfolio__hexagon-room').addClass('wow fadeInLeft');
      
        // hexagons second block
        $('.portfolio__hexagon-build-1').addClass('wow fadeInLeft');
        $('.portfolio__hexagon-build-2').addClass('wow fadeInRight');
        $('.portfolio__hexagon-build-3').addClass('wow fadeInLeft');
      
        $('.portfolio__hexagon-build-4').addClass('wow fadeInRight');
        $('.portfolio__hexagon-build-5').addClass('wow fadeInLeft');
    }

    $('.burger').on('click', function(){
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        
        // Функция скрывающая меню бургер при нажатии на линк
        $('.menu__link').on('click', function(){
      
          $('.menu').removeClass('active');
          $('.burger').removeClass('active');
      
        })
      })

      // Initialise Carousel
      $('.main-page__slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        swipeToSlide: true,
        centerPadding: '40px'
        
        
    });
    $('slick-slide-control01').removeAttr
});
