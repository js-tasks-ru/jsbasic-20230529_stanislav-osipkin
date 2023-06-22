function initCarousel() {

  let container = document.querySelector('.container');
  let slide = document.querySelector('.carousel__inner');
  let carouselArr = Array.from(document.querySelectorAll('.carousel__slide'));
  let offset = 0;

  container.addEventListener('click', function (event) {
    let nextArrow = event.target.closest('.carousel__arrow_right');
    let prevArrow = event.target.closest('.carousel__arrow_left');


    if (nextArrow) {
      offset -= slide.offsetWidth;
      if (offset <= -((carouselArr.length - 1) * slide.offsetWidth)) {
        nextArrow.style.display = 'none';
      }
      else { nextArrow.style.display = ''; }
      console.log(offset);

      slide.style.transform = `translateX(${offset}px)`;
    }

    if (prevArrow) {
      offset += slide.offsetWidth;
      if (offset >= 0) {
        prevArrow.style.display = 'none';
      }
      console.log(offset);

      slide.style.transform = `translateX(${offset}px)`;
    }
  });
}

