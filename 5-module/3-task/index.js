function initCarousel() {

  let container = document.querySelector('.container');
  let slide = document.querySelector('.carousel__inner');
  let carouselArr = Array.from(document.querySelectorAll('.carousel__slide'));
  let slideCount = 0;
  let offset = 0;
  let nextArrow = document.querySelector('.carousel__arrow_right');
  let prevArrow = document.querySelector('.carousel__arrow_left');
  document.querySelector('.carousel__arrow_left').style.display = 'none';

  container.addEventListener('click', function (event) {
    let next = event.target.closest('.carousel__arrow_right');
    let prev = event.target.closest('.carousel__arrow_left');


    if (next) {
      slideCount++;
      prevArrow.style.display = '';
      offset -= slide.offsetWidth;

      if (slideCount === (carouselArr.length - 1)) {
        nextArrow.style.display = 'none';
      }

      slide.style.transform = `translateX(${offset}px)`;
    }

    if (prev) {
      slideCount--;
      nextArrow.style.display = '';
      offset += slide.offsetWidth;

      if (slideCount === 0) {
        prevArrow.style.display = 'none';
      }

      slide.style.transform = `translateX(${offset}px)`;
    }
  });
}

