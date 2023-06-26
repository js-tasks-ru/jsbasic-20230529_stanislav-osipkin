import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.customEvent();
    // this.slideToggle();
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>
    </div>
    `);
    this.elem.querySelector('.carousel__inner').insertAdjacentHTML('beforeend',
      this.slides.map(({image, price, name}) =>
        `<div class="carousel__slide" data-id="penang-shrimp">
            <img src="../../assets/images/carousel/${image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
         </div>
        `).join('')
    );

    this.elem.addEventListener('click', this.Onclick);

    return this.elem;
  }

  Onclick = () => {
    let myEvent = new CustomEvent('product-add', {
      detail: this.slides,
      bubbles: true,
    });

    this.elem.dispatchEvent(myEvent);
  }

  customEvent() {
    this.elem.addEventListener('product-add', event => {
      console.log(event.detail);


    });
  }

  // slideToggle() {

  //   this.carousel = this.elem.closest('.carousel');
  //   this.slide = this.carousel.querySelector('.carousel__inner');
  //   this.carouselArr = Array.from(this.carousel.querySelectorAll('.carousel__slide'));
  //   this.slideCount = 0;
  //   this.offset = 0;
  //   this.nextArrow = this.carousel.querySelector('.carousel__arrow_right');
  //   this.prevArrow = this.carousel.querySelector('.carousel__arrow_left').style.display = 'none';
  //   console.log(this.slide.offsetWidth);

  //   this.carousel.addEventListener('click', function (event) {
  //     this.next = event.target.closest('.carousel__arrow_right');
  //     this.prev = event.target.closest('.carousel__arrow_left');

  //     if (this.next) {
  //       this.slideCount++;
  //       this.prevArrow.style.display = '';
  //       this.offset -= this.slide.offsetWidth;

  //       if (this.slideCount === (this.carouselArr.length - 1)) {
  //         this.nextArrow.style.display = 'none';
  //       }

  //       this.slide.style.transform = `translateX(${offset}px)`;
  //     }

  //     if (this.prev) {
  //       this.slideCount--;
  //       this.nextArrow.style.display = '';
  //       this.offset += this.slide.offsetWidth;

  //       if (this.slideCount === 0) {
  //         this.prevArrow.style.display = 'none';
  //       }

  //       this.slide.style.transform = `translateX(${offset}px)`;
  //     }
  //   });
  // }


}
