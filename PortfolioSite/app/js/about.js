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
    $('.burger').on('click', function(){
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        
        // Функция скрывающая меню бургер при нажатии на линк
        $('.menu__link').on('click', function(){
      
          $('.menu').removeClass('active');
          $('.burger').removeClass('active');
      
        })
      })

    onScrollHeader();

});