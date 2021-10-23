
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
  const allTagA = document.querySelectorAll('a[href]');

      for(var i = 0; i < allTagA.length; i++){

        if (allTagA[i].getAttribute('href').substr(1) == 'main'){

          const main = allTagA[i];
          main.addEventListener('click', function(event){

            event.preventDefault();
    
            const scrollTargetMain = document.getElementById('main');
    
            const topOffset = 0;
    
            const elementPosition =  scrollTargetMain.getBoundingClientRect().top;
    
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
            })
          })
        }
        else if (allTagA[i].getAttribute('href').substr(1) == 'about'){

          const about = allTagA[i];
          about.addEventListener('click', function(event){

            event.preventDefault();
    
            const scrollTargetAbout = document.getElementById('about');
            if (scrollTargetAbout.click){
              $('a.header__top-item-link').addClass('header__top-item-link--active');
            }
    
            const topOffset = 0;
    
            const elementPosition =  scrollTargetAbout.getBoundingClientRect().top;
    
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
            })
          })
        }
      }
      
      wow.init();
      onScrollHeader();

  // Initialise Carousel
const logoCarousel = new Carousel(document.querySelector("#logoCarousel"), {
  friction: 0.83,
  Dots: false,
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
