
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

















      wow.init();
      onScrollHeader();

      // Initialise Carousel
const logoCarousel = new Carousel(document.querySelector("#carusel"), {
  friction: 0.83,
  Dots: false,
  on: {
    change: (carousel, to) => {
      // Clear active elements
      document
        .querySelectorAll("#carusel .is-active, #caruselBar .is-active")
        .forEach((el) => {
          el.classList.remove("is-active");
        });

      // Mark current elements as active
      document
        .querySelectorAll(
          `#carusel [data-for="${to}"], #caruselBar [data-for="${to}"]`
        )
        .forEach((el) => {
          el.classList.add("is-active");
        });
    },
  },
});

// Make links clickable
document.getElementById("caruselBar").addEventListener("click", (event) => {
  const index = event.target.dataset.for || -1;

  if (index > -1) {
    event.preventDefault();
    logoCarousel.slideTo(index);
  }
});


});
