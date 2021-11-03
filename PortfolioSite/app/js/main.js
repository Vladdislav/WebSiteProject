

$(function(){
  
  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
  
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

  $('.project__bottom-block').removeClass('fadeInUp delay-1s');
  $('.project__bottom-block').removeClass('fadeInUp delay-2s');
  $('.project__bottom-block').addClass('fadeInLeft');
  
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

//-----------------------------------------------------------//
      
      

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
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
      
      wow.init();
      onScrollHeader();

  // Initialise Carousel
const logoCarousel = new Carousel(document.querySelector("#logoCarousel"), {
  friction: 0.83,
  Dots: false,
  Autoplay: true,
  on: {
    change: (carousel, to) => {
      // Clear active elements
      document
        .querySelectorAll("#logoCarousel .is-active, #logoBar .is-active")
        .forEach((el) => {
          el.classList.remove("is-active");
        });

      // Mark current elements as active
      document
        .querySelectorAll(
          `#logoCarousel [data-for="${to}"], #logoBar [data-for="${to}"]`
        )
        .forEach((el) => {
          el.classList.add("is-active");
        });
    },
  },
});

// Make links clickable
document.getElementById("logoBar").addEventListener("click", (event) => {
  
  const index = event.target.dataset.for || -1;

  if (index > -1) {
    event.preventDefault();
    logoCarousel.slideTo(index);
  }
});


});
